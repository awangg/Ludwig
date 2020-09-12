const config = require('../../config')
const mongodb = require('mongodb')
const { Readable } = require('stream')

const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectID

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
  const readableTrackStream = new Readable()
  readableTrackStream.push(file.buffer)
  readableTrackStream.push(null)

  let uploadStream = bucket.openUploadStream(name)
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

module.exports = {
  uploadMergedVideo: uploadMergedVideo,
  getVideoById: getVideoById
}