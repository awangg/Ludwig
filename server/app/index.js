const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')

const apiRoutes = require('../src/controllers')

const database;

const run = (port, dburi) => {
  const app = express()
  const server = http.createServer(app)
  const MongoClient = mongodb.MongoClient

  app.use(bodyParser.json())
  app.use('/api/v1', apiRoutes)

  MongoClient.connect(dburi).then( (db) => {
    database = db
    server.listen(port, () => {
      console.log('Listening on http://localhost:' + port)
    })
  }).catch( err => {
    console.log('Error loading DB')
    console.log(err)
    process.exit(1)
  })
}

module.exports = {
  run: run,
  database: database
}

