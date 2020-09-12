const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const apiRoutes = require('../src/controllers')

const run = (port, dburi) => {
  const app = express()
  const server = http.createServer(app)

  app.use(bodyParser.json())
  app.use('/api/v1', apiRoutes)

//   mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true }).then( () => {
//     server.listen(port, () => {
//       console.log('Listening on http://localhost:' + port)
//     })
//   }).catch( err => {
//     console.log('Error loading DB')
//     console.log(err)
//     process.exit(1)
//   })
// }

  server.listen(port, () => {
    console.log('Listening on http://localhost:' + port)
  })
}


module.exports = run

