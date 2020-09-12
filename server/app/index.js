const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const apiRoutes = require('../src/controllers')

const run = (port) => {
  const app = express()
  const server = http.createServer(app)

  app.use(bodyParser.json())
  app.use('/api/v1', apiRoutes)

  server.listen(port, () => {
    console.log('Listening on http://localhost:' + port)
  })
}

module.exports = {
  run: run
}

