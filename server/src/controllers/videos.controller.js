const express = require('express')
const multer = require('multer')

const { videos } = require('../handlers')

const router = express.Router()
const storage = multer.memoryStorage()
const upload = multer({ storage: storage, limits: { fields: 1, fileSize: 60 * 1024 * 1024, files: 1, parts: 2 }});

router.get('/', (req, res) => {
  res.status(200).send('Successfully received videos')
  res.status(401).send('Unauthorized')
})

router.post('/', upload.single('video'), async (req, res) => {
  try {
    const videoId = await videos.uploadMergedVideo(req.body.name, req.file)
    console.log(videoId)
    res.status(201).json(videoId)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

router.get('/:videoId', async (req, res) => {
  try {
    const videoChunks = await videos.getVideoById(req.params.videoId)
    res.set('content-type', 'audio/mp3')
    res.set('accept-ranges', 'bytes')

    videoChunks.forEach( (chunk) => {
      res.write(chunk)
    })
    res.status(200).end()
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
} )

router.put('/:videoId', (req, res) => {
  res.status(200).send('Retrieved video')
  res.status(401).send('Unauthorized')
  res.status(405).send('Invalid Input')
})

router.put('/:videoId', (req, res) => {
  res.status(200).send('Deleted Video')
  res.status(401).send('Unauthorized')
  res.status(405).send('Video not found')
})

module.exports = router