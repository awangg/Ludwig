const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const personSchema = new Schema({
  name: { type: String, required: 'Name Invalid' },
  email: { type: String, unique: true, lowercase: true, required: 'Email Invalid' },
  password: { type: String, required: 'Password Invalid' },
  roles: [
    { type: String }
  ]
})

personSchema.pre('save', function (next) {
  let person = this
  if(!person.isModified('password')) return next()
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(person.password, salt, function(err, hash) {
      person.password = hash
      next()
    })
  })
})

personSchema.methods.comparePassword = async function(password) {
  let valid = await bcrypt.compare(password, this.password)
  return valid
}

personSchema.static.existsUser = function(username) {

}

module.exports = mongoose.model('User', personSchema)