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
var bucket;
MongoClient.connect(config.db.uri).then( (client) => {
  database = client.db('musync')
  bucket = new mongodb.GridFSBucket(database, {
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

  let uploadStream = bucket.openUploadStream(value.name)
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
  let downloadStream = bucket.openDownloadStream(id)

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

const mergeVideos = async (files, meta) => {
  const paths = await tempSaveFiles(files)
  paths.push(path.join(os.tmpdir(), 'final1'))
  paths.push(path.join(os.tmpdir(), 'final2'))
  console.log(paths)

  const decodedVideo1 = wavDecoder.decode.sync(files.video1[0].buffer)
  const decodedVideo2 = wavDecoder.decode.sync(files.video2[0].buffer)

  const offsets = await findStartPoints(decodedVideo1, decodedVideo2, meta)
  console.log(offsets)
  console.log(TimeFormat.formatTimeAbsolute(offsets[0]))
  console.log(TimeFormat.formatTimeAbsolute(offsets[1]))

  const outputStream = fs.createWriteStream('./output.wav')

  const trimFirst = SoxCommand()
    .input(paths[0])
    .inputFileType('wav')
    .output(paths[2])
    .outputFileType('wav')
    .outputSampleRate(44100)
    .trim(TimeFormat.formatTimeAbsolute(offsets[0]))
    .run()
  
  const trimSecond = SoxCommand()
    .input(paths[1])
    .inputFileType('wav')
    .output(paths[3])
    .outputSampleRate(44100)
    .outputFileType('wav')
    .trim(TimeFormat.formatTimeAbsolute(offsets[1]))
    .run()

  const merge = SoxCommand()
    .input(paths[2])
    .input(paths[3])
    .output(outputStream)
    .outputFileType('wav')
    .combine('merge')
    .run()
  
  return new Promise( (resolve, reject) => {
    outputStream.on('error', (error) => {
      reject(error)
    })

    outputStream.on('finish', () => {
      resolve('Woot')
    })
  })
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

const findStartPoints = async (decoded1, decoded2, meta) => {
  const data1 = decoded1.channelData[0]
  const data2 = decoded2.channelData[0]

  try {
    const pitch1 = PitchFinder.default.frequencies(detector, data1, {
      tempo: meta.tempo,
      quantization: meta.specificity
    })
    const pitch2 = PitchFinder.default.frequencies(detector, data2, {
      tempo: meta.tempo,
      quantization: meta.specificity
    })

    const offset1 = await computeTimeOffset(pitch1, meta)
    const offset2 = await computeTimeOffset(pitch2, meta)
    if(offset1 < 0 || offset2 < 0) throw new Error('No Starting Pitch Found')

    return [ offset1, offset2 ]

  } catch (err) {
    console.log(err)
    throw new Error('Error on Pitch Calculation')
  }
}

const computeTimeOffset = (data, meta) => {
  for(let index = 0; index < data.length; index++) {
    frequency = data[index]
    if(frequency >= 30 && frequency <= 2000) {
      return (((( (index + 1) / meta.specificity ) / meta.tempo) * 60) - .5).toFixed(2)
    }
  }
  return -1
}

module.exports = {
  uploadMergedVideo: uploadMergedVideo,
  getVideoById: getVideoById,
  mergeVideos: mergeVideos
}