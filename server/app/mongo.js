const config = require('../config')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const MongoClient = mongodb.MongoClient

var database;
var videoBucket;
var imageBucket;
MongoClient.connect(config.db.uri).then( (client) => {
  console.log('Multipart Connection')
  database = client.db('musync')
  videoBucket = new mongodb.GridFSBucket(database, {
    bucketName: 'videos'
  })
  imageBucket = new mongodb.GridFSBucket(database, {
    bucketName: 'images'
  })
}).catch( err => {
  console.log('Error loading DB')
  console.log(err)
  process.exit(1)
})

mongoose.connect(config.db.uri + '/musync', {useNewUrlParser: true})
mongoose.connection.on('error', (err) => {
  console.log('Could not connect to MongoDB')
})

module.exports = {
  database: database,
  videoBucket: videoBucket,
  imageBucket: imageBucket
}