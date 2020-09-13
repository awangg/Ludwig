const config = require('../config')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const MongoClient = mongodb.MongoClient

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

mongoose.connect(config.db.uri + '/musync', {useNewUrlParser: true})
mongoose.connection.on('error', (err) => {
  console.log('Could not connect to MongoDB')
})

module.exports = {
  database: database,
  bucket: bucket
}