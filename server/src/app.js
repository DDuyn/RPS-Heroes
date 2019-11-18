/* eslint-disable no-trailing-spaces */
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var mongoose = require('mongoose')
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds155492.mlab.com:55492/rpggame`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection Succeeded')
})
mongoose.set('debug', true)

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('../routes')(app)

app.listen(process.env.PORT || 8081)
