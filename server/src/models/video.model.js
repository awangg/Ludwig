const Joi = require('joi')

const schema = Joi.object().keys({
  name: Joi.string().required(),
  file: Joi.binary().required(),
});

const validate = (data) => {
  return schema.validate(data)
} 

module.exports = {
  schema: schema,
  validate: validate
}