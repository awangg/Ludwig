const config = require('../../config')
const mongodb = require('mongodb')
const { Readable } = require('stream')

const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectID

var database;
var imageBucket;
MongoClient.connect(config.db.uri).then( (client) => {
  database = client.db('musync')
  imageBucket = new mongodb.GridFSBucket(database, {
    bucketName: 'images'
  })
}).catch( err => {
  console.log('Error loading DB')
  console.log(err)
  process.exit(1)
})

const getAllAssignments = async () => {
  let assignments = await database.collection('images.files').find({})
  let ids = []
  await assignments.forEach( (assignment) => { ids.push(assignment._id) })
  return ids
}

const uploadAssignment = (name, file) => {
  const readableTrackStream = new Readable()
  readableTrackStream.push(file.buffer)
  readableTrackStream.push(null)

  let uploadStream = imageBucket.openUploadStream(name)
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

const getAssignmentById = (imageId) => {
  let id = new ObjectId(imageId)
  let downloadStream = imageBucket.openDownloadStream(id)

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
  getAllAssignments: getAllAssignments,
  uploadAssignment: uploadAssignment,
  getAssignmentById: getAssignmentById
}