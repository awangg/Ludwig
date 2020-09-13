const config = require('../../config')
const mongodb = require('mongodb')
const { Readable } = require('stream')
const fs = require('fs')
const path= require('path')
const os = require('os')
const wavDecoder = require('wav-decoder')
const PitchFinder = require('pitchfinder')
const SoxCommand = require('sox-audio')

const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectID
const detector = new PitchFinder.YIN()
const TimeFormat = SoxCommand.TimeFormat

const { video } = require('../models')

var database;
var videoBucket;
MongoClient.connect(config.db.uri).then( (client) => {
  database = client.db('musync')
  videoBucket = new mongodb.GridFSBucket(database, {
    bucketName: 'videos'
  })
}).catch( err => {
  console.log('Error loading DB')
  console.log(err)
  process.exit(1)
})

const uploadMergedVideo = async (name, file) => {
  console.log(file)
  let { value, error } = await video.validate({
    name: name,
    file: file.buffer
  })
  if(error) throw new Error('Validation Error')

  const readableTrackStream = new Readable()
  readableTrackStream.push(value.file)
  readableTrackStream.push(null)

  let uploadStream = videoBucket.openUploadStream(value.name)
  let id = uploadStream.id
  readableTrackStream.pipe(uploadStream)

  return new Promise( (resolve, reject) => {
    uploadStream.on('error', error => {
      reject(error)
    })
  
    uploadStream.on('finish', () => {
      resolve(id)
    })
  })
}

const getVideoById = async (videoId) => {
  let id = new ObjectId(videoId)
  let downloadStream = videoBucket.openDownloadStream(id)

  return new Promise( (resolve, reject) => {
    let chunks = []
    downloadStream.on('data', (chunk) => {
      chunks.push(chunk)
    })
    downloadStream.on('error', error => {
      reject(error)
    })
    downloadStream.on('end', () => {
      resolve(chunks)
    })
  })
}

const mergeVideos = async (meta) => {
  console.log(meta)
  // Get All Video Ids
  const videos = await database.collection('videos.files').find({})
  let ids = []
  await videos.forEach( (video) => { ids.push(new ObjectId(video._id)) })
  console.log('ids: ' + ids)

  let videoBuffers = await generateBuffers(ids)
  // return videoBuffers[0]

  let offsets = []
  videoBuffers.forEach( async (buffer) => {
    let decoded = wavDecoder.decode.sync(buffer)
    offsets.push(findStartPoint(decoded, meta))
  })

  let commandPromise = new Promise( (resolve, reject) => {
    let paths = []    
    ids.forEach( async (id, index) => {
      let p = path.join(os.tmpdir(), 'video'+index)
      let command = SoxCommand()
        .input(videoBucket.openDownloadStream(id))
        .inputFileType('wav')
        .output(p)
        .outputFileType('wav')
        .outputSampleRate(44100)
        .trim(await offsets[index])
        .run()
      paths.push(p)
      if(index === ids.length - 1) {
        resolve(paths)
      }
    })
  })

  let outputPath = path.join(os.tmpdir(), 'merged')
  console.log(outputPath)
  let uploadStream = videoBucket.openUploadStream('merged')
  let id = uploadStream.id

  commandPromise.then( async (paths) => {
    let mergeCommand = await SoxCommand()
      .input(paths[0])
      .input(paths[1])
      .output(outputPath)
      .outputFileType('wav')
      .combine('mix')
      .run()

    mergeCommand.on('end', () => {
      console.log('merge success')
      let readStream = fs.createReadStream(outputPath)
      readStream.pipe(uploadStream)
    })
  })

  return new Promise( (resolve, reject) => {
    uploadStream.on('error', error => {
      reject(error)
    })
  
    uploadStream.on('finish', () => {
      resolve(id)
    })
  })
}

const generateBuffers = async (ids) => {
  let bufferArrays = []
  await ids.forEach( (id) => {
    let stream = videoBucket.openDownloadStream(id)
    bufferArrays.push(new Promise( (resolve, reject) => {
      let chunks = []
      stream.on('data', (chunk) => {
        chunks.push(chunk)
      })
      stream.on('error', error => {
        reject(error)
      })
      stream.on('end', () => {
        resolve(chunks)
      })
    }))
  })
  return new Promise( (resolve, reject) => {
    Promise.all(bufferArrays).then( () => {
      let buffers = []
      bufferArrays.forEach( async (promise) => {
        let array = await promise
        buffers.push(Buffer.concat(array))
      })
      resolve(buffers)
    })
  })
}

const findStartPoint = async (decoded, meta) => {
  const data = decoded.channelData[0]

  try {
    const pitch = PitchFinder.default.frequencies(detector, data, {
      tempo: parseInt(meta.tempo),
      quantization: parseInt(meta.specificity)
    })

    const offset = await computeTimeOffset(pitch, meta)
    console.log(offset)
    if(offset < 0) throw new Error('No Starting Pitch Found')

    return TimeFormat.formatTimeAbsolute(offset)
  } catch (err) {
    console.log(err)
    throw new Error('Error on Pitch Calculation')
  }
}

const computeTimeOffset = (data, meta) => {
  for(let index = 0; index < data.length; index++) {
    frequency = data[index]
    if(frequency >= 30 && frequency <= 2000) {
      return (((( (index + 1) / parseInt(meta.specificity) ) / parseInt(meta.tempo)) * 60) - .75).toFixed(2)
    }
  }
  return -1
}


const tempSaveFiles = (files) => {
  let promises = []

  const path1 = path.join(os.tmpdir(), path.basename(files.video1[0].fieldname))
  const path2 = path.join(os.tmpdir(), path.basename(files.video2[0].fieldname))

  const readStream1 = new Readable()
  const readStream2 = new Readable()
  readStream1.push(files.video1[0].buffer)
  readStream1.push(null)
  readStream2.push(files.video2[0].buffer)
  readStream2.push(null)

  uploadStream1 = fs.createWriteStream(path1)
  uploadStream2 = fs.createWriteStream(path2)

  readStream1.pipe(uploadStream1)
  readStream2.pipe(uploadStream2)

  promises.push(new Promise( (resolve, reject) => {
    uploadStream1.on('error', (error) => {
      reject(error)
    })
    uploadStream1.on('finish', () => {
      resolve()
    })
  }))
  promises.push(new Promise( (resolve, reject) => {
    uploadStream2.on('error', (error) => {
      reject(error)
    })
    uploadStream2.on('finish', () => {
      resolve()
    })
  }))

  return new Promise( (resolve, reject) => {
    Promise.all(promises).then( () => {
      resolve([ path1, path2 ])
    })
  })
}

module.exports = {
  uploadMergedVideo: uploadMergedVideo,
  getVideoById: getVideoById,
  mergeVideos: mergeVideos
}