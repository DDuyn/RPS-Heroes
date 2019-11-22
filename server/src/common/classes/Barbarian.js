const HeroBase = require('./HeroBase')
const Common = require('../Common')

class Barbarian extends HeroBase {
    constructor(Life, Strength, Resistance) {
        super(Life, Strength, Resistance)
    }

}

function GenerateBarbarian () {
    let life = Common.GenerateNumber(150, 300)
    let strength = Common.GenerateNumber(60, 120)
    let resistance = Common.GenerateNumber(100, 200)

    return new Barbarian(life, strength, resistance)
}

function UpgradeStatsBarbarian (Stats) {
    Stats.Life += Common.GenerateNumber(4,12)
    Stats.Strength += Common.GenerateNumber(1, 7)
    Stats.Resistance += Common.GenerateNumber(3, 10)

    return Stats
}

module.exports = {
    GenerateBarbarian,
    UpgradeStatsBarbarian
}