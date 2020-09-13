const config = require('../../config')
const { database, bucket } = require('../../app/mongo')
const jwt = require('jwt-simple')
const moment = require('moment')

const { user } = require('../models')

const login = async (email, password) => {
  let currUser = await user.findOne({ email: email })
  if(!currUser) throw new Error('User not found')
  let authorized = await currUser.comparePassword(password)
  if(authorized) {
    console.log('hello')
    let payload = {
      exp: moment.unix(moment().add('30', 'm')),
      sub: currUser._id,
    }
    console.log(payload)
    return {
      roles: currUser.roles,
      name: currUser.name,
      email: currUser.email,
      token: jwt.encode(payload, config.auth.secret)
    }
  } else {
    throw new Error('Incorrect Password')
  }
}

const signup = async (name, email, password, role) => {
  user.findOne({ email: email }, async function(err, existing) {
    if(err) throw new Error('Error accessing user database')
    if(!existing) {
      let newUser = new user({
        email: email,
        password: password,
        name: name,
        roles: [ role ]
      })
      return newUser.save()
    } else {
      throw new Error('User already exists')
    }
  })
}

module.exports = {
  login: login,
  signup: signup
}