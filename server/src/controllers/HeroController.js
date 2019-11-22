const Common = require('../common/Common')
const HeroUtils = require('../common/utils/HeroUtils')
const CommonRepository = require('../repositories/CommonRepository')
const HeroRepository = require('../repositories/HeroRepository')
const Hero = require('../models/Hero')


module.exports = {
    async CreateHero (req, res) {
        let hero = new Hero()
        let data = null
        
        let lastHero = await CommonRepository.GetLastCode(Hero)
        hero.Code = lastHero.Code + 1
        hero.Name = req.body.name
        hero.User = req.body.user
        hero.Class = req.body.class

        let heroCreated = await HeroRepository.CreateHero(hero)
        let heroStatsCreated = await HeroRepository.CreateHeroStats(HeroUtils.CreateHero(hero))

        if (heroCreated !== null && heroStatsCreated !== null) {
            data = {
                hero: heroCreated,
                heroStats: heroStatsCreated
            }
        }

        return Common.SendResponse(data, res)
    },
    async GetAllHeroesByUser (req, res) {        
        let heroes = await HeroRepository.GetAllHeroesByUser(req.params.user)
        return Common.SendResponse(heroes, res)
    },
    async GetHero (req, res) {
        let hero = await HeroRepository.GetHero(req.params.code)
        let heroStats =  await HeroRepository.GetHeroStats(req.params.code)

        let data = null
        if (hero !== null && heroStats !== null) {
            data = {
                hero: hero,
                heroStats: heroStats
            }
        }

        return Common.SendResponse(data, res)
    },
    async DeleteHero (req, res) {
        let heroDeleted = await HeroRepository.DeleteHero(req.params.code)
        let heroStatsDeleted = await HeroRepository.DeleteHeroStats(req.params.code)
        let data = null

        if (heroDeleted !== null && heroStatsDeleted !== null) {
            data = {
                hero: heroDeleted,
                heroStatsDeleted: heroStatsDeleted
            }
        }

        return Common.SendResponse(data, res)
    },
    async UpdateHero (req, res) {
        let hero = new Hero()
        hero.Name = req.body.name       

        let data = await HeroRepository.UpdateHero(req.params.code, hero)
        return Common.SendResponse(data, res)
    },
    async UpdateHeroStats (req, res) {
        let hero = req.body.Hero
        let heroStats = req.body.HeroStats
        let expGained = req.body.ExpGained
        heroStats = HeroUtils.AddExperienceToHero(hero, heroStats, expGained)
               
        heroStats = await HeroRepository.UpgradeHeroStats(hero.Code, heroStats)

        return Common.SendResponse(heroStats, res)
    }
}