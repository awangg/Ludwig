const express = require('express')
const multer = require('multer')

const { videos } = require('../handlers')

const router = express.Router()
const storage = multer.memoryStorage()
const upload = multer({ storage: storage, limits: { fileSize: 200 * 1024 * 1024 } });

router.get('/', (req, res) => {
  res.status(200).send('Successfully received videos')
  res.status(401).send('Unauthorized')
})

router.post('/', upload.single('video'), async (req, res) => {
  try {
    const videoId = await videos.uploadMergedVideo(req.body.name, req.file)
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
})

router.put('/:videoId', (req, res) => {
  res.status(200).send('Retrieved video')
  res.status(401).send('Unauthorized')
  res.status(405).send('Invalid Input')
})

router.delete('/:videoId', (req, res) => {
  res.status(200).send('Deleted Video')
  res.status(401).send('Unauthorized')
  res.status(405).send('Video not found')
})

router.post('/merge', upload.fields([{ name: 'video1', maxCount: 1 }, { name: 'video2', maxCount: 1 }]), async (req, res) => {
  try {
    const mergedVideo = await videos.mergeVideos(req.files, req.body)
    console.log(mergedVideo)
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
})

module.exports = router