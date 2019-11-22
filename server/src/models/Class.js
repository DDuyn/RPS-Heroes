var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ClassSchema = new Schema({
    Code: Number,
    Name: String
})

var Class = mongoose.model('classes', ClassSchema)
module.exports = Class