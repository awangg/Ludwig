const express = require('express')
const multer = require('multer')

const { assignments } = require('../handlers')
const { verifyAuth } = require('../utils/auth')

const router = express.Router()
const storage = multer.memoryStorage()
const upload = multer({ storage: storage, limits: { fileSize: 200 * 1024 * 1024 } })

router.get('/', verifyAuth, async (req, res) => {
  try {
    let assignmentIds = await assignments.getAllAssignments()
    res.status(200).json(assignmentIds)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

router.post('/', upload.single('assignment'), verifyAuth, async (req, res) => {
  try {
    let id = await assignments.uploadAssignment(req.body.name, req.file)
    res.status(201).json(id)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

router.get('/:imageId', verifyAuth, async (req, res) => {
  try {
    const imageChunks = await assignments.getAssignmentById(req.params.imageId)
    res.set('content-type', 'application/pdf')
    res.set('accept-ranges', 'bytes')

    imageChunks.forEach( (chunk) => {
      res.write(chunk)
    })
    res.status(200).end()
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

module.exports = router