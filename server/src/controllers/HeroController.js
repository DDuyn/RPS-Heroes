const Common = require('../common/Common')
const CommonRepository = require('../repositories/CommonRepository')
const HeroRepository = require('../repositories/HeroRepository')
const Hero = require('../models/Hero')

module.exports = {
    async CreateHero (req, res) {
        let hero = new Hero()
        
        let lastHero = await CommonRepository.GetLastCode(Hero)
        hero.Code = lastHero.Code + 1
        hero.Name = req.body.name
        hero.User = req.body.user
        hero.Class = req.body.class

        let data = await HeroRepository.CreateHero(hero)
        return Common.SendResponse(data, res)
    },
    async GetAllHeroesByUser (req, res) {        
        let heroes = await HeroRepository.GetAllHeroesByUser(req.params.user)
        return Common.SendResponse(heroes, res)
    },
    async GetHero (req, res) {
        let hero = await HeroRepository.GetHero(req.params.code)
        return Common.SendResponse(hero, res)
    },
    async DeleteHero (req, res) {
        let data = await HeroRepository.DeleteHero(req.params.code)
        return Common.SendResponse(data, res)
    }
}