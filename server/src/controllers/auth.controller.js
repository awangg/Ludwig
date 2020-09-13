const express = require('express')

const { auth } = require('../handlers')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    let authObj = await auth.login(req.body.email, req.body.password)
    res.status(200).json(authObj)
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: err.message })
  }
})

router.post('/new', async (req, res) => {
  try {
    let newUser = await auth.signup(req.body.name, req.body.email, req.body.password, req.body.role)
    res.status(201).json(newUser)
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: err.message })
  }
})

module.exports = router