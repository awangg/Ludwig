const schema = require('./schema')
const Joi = require('joi')

function validateVideo(data) {
    Joi.validate(data, schema.videoSchema, (err, value) => {
        if (err) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: data
            });
        } else {
        // send a success response if validation passes
        // attach the random ID to the data response
        res.json({
            status: 'success',
            message: 'User created successfully',
            data: data
        });
    }})
}

module.exports = {
    validateVideo: validateVideo
}