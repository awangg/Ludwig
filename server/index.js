const app = require('./app')
const config = require('./config')

app(config.port, config.db.uri)