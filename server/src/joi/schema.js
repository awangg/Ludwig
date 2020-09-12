const Joi = require('joi')

// define the validation schema
// const Readable = require('stream').Readable

const videoSchema = Joi.object().keys({
    filename: Joi.string().required(),
    file: Joi.binary().required(),
    //or
    // file: Joi.object().type(Readable)
});

module.exports = Joi