const express = require('express')
const router = express.Router()

const videoId = ""

router.get('/', (req, res) => {
    res.status(200).send('Successfully received videos')
    res.status(401).send('Unauthorized')
  })

router.post('/', (req, res) => {
    res.status(200).send('Successfully uploaded videos')
    res.status(401).send('Unauthorized')
    res.status(405).send('Invalid Input')
  })

router.get('/:videoId', (req, res) => {
    res.status(200).send('Retrieved video')
    res.status(401).send('Unauthorized')
    res.status(405).send('Invalid Input')
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