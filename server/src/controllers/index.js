const express = require('express')
const router = express.Router()

router.get('/healthCheck', (req, res) => {
  res.status(200).send('All is well on /api/v1')
})

router.use('/videos', require('./videos.controller'))

module.exports = router