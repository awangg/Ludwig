const mongodb = require('mongodb')
const { Readable } = require('stream')
const ObjectId = mongodb.ObjectID

const database = require('../../app').database

const uploadMergedVideo = (name, file) => {
  const readableTrackStream = new Readable()
  readableTrackStream.push(file.buffer)
  readableTrackStream.push(null)

  let bucket = new mongodb.GridFSBucket(database, {
    bucketName: 'videos'
  })

  let uploadStream = bucket.openUploadStream(name)
  let id = uploadStream.id
  readableTrackStream.pipe(uploadStream)

  uploadStream.on('error', () => {
    throw new Error()
  })

  uploadStream.on('finish', () => {
    return id
  })
}

module.exports = {
  uploadMergedVideo: uploadMergedVideo
}