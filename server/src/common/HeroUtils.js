const Hero = require('../models/Hero')
const HeroStats = require('../models/HeroStats')
const Enum = require('./Enum')
const Barbarian = require('./classes/Barbarian')

function CreateHero (Hero) {
    let statsHero = GenerateStats(Hero.Class)
    let heroStats = new HeroStats()

    heroStats.HeroCode = Hero.Code
    heroStats.Level = 1
    heroStats.TotalExperience = 0
    heroStats.ExperienceNeeded = 100
    heroStats.Life = statsHero.Life
    heroStats.Strength = statsHero.Strength
    heroStats.Resistance = statsHero.Resistance
    heroStats.IsDead = false

    return heroStats

}

function AddExperienceToHero (Hero, ExpGained) {

}

function GenerateStats (Class) {
    let statsHero = null
    switch (Class) {
        case Enum.CLASSES.BARBARIAN:
            statsHero = Barbarian.GenerateBarbarian()
            break
        case Enum.CLASSES.DRUID:
            console.log('Druid')
            break
    }

    return statsHero
}

module.exports = {
    CreateHero
}
