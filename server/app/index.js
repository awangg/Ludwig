const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const run = (port, dburi) => {
  const app = express()
  const server = http.createServer(app)

  app.use(bodyParser.json())

  mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true }).then( () => {
    server.listen(port, () => {
      console.log('Listening on http://localhost:' + port)
    })
  }).catch( err => {
    console.log('Error loading DB')
    console.log(err)
    process.exit(1)
  })
}

module.exports = run

