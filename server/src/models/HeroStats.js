var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HeroStatsSchema = new Schema({
    HeroCode: Number,
    Level: Number,
    TotalExperience: Number,
    ExperienceNeeded: Number,
    Life: Number,
    Strength: Number,
    Resistance: Number,
    IsDead: Boolean
})

var HeroStats = mongoose.model('heroes-stats', HeroStatsSchema)
module.exports = HeroStats