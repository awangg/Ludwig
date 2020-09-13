const express = require('express')
const router = express.Router()

router.get('/healthCheck', (req, res) => {
  res.status(200).send('All is well on /api/v1')
})

router.use('/videos', require('./videos.controller'))
router.use('/auth', require('./auth.controller'))
router.use('/assignments', require('./assignment.controller'))

module.exports = router