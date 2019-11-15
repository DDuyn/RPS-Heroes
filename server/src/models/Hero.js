var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HeroSchema = new Schema({
    Code: Number,
    User: String,
    Name: String,
    Class: String
})

var Hero = mongoose.model('heroes', HeroSchema)
module.exports = Hero