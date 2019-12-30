const Common = require('../common/Common')
const HeroUtils = require('../common/utils/HeroUtils')
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

        let heroCreated = await HeroRepository.CreateHero(hero)
        let heroStatsCreated = await HeroRepository.CreateHeroStats(HeroUtils.CreateHero(hero))

        if(Common.CheckObject(heroCreated) && Common.CheckObject(heroStatsCreated)) {
            res.send({
                Status: 200,                
                hero: heroCreated,
                heroStats: heroStatsCreated,
                message: 'Successfully'
            })
        }else{
            return Common.SendNotFound(res)
        }      
    },
    async GetAllHeroesByUser (req, res) {        
        let heroes = await HeroRepository.GetAllHeroesByUser(req.params.user)

        if(Common.CheckObject(heroes)) {
            res.send({
                Status: 200,
                heroes: heroes,
                message: 'Successfully'
            })
        }else{
            return Common.SendNotFound(res)
        }        
    },
    async GetHero (req, res) {
        let hero = await HeroRepository.GetHero(req.params.code)
        let heroStats =  await HeroRepository.GetHeroStats(req.params.code)

        if(Common.CheckObject(hero) && Common.CheckObject(heroStats)) {
            res.send({
                Status: 200,
                hero: hero,
                heroStats: heroStats,
                message: 'Successfully'
            })
        }else{
            return Common.SendNotFound(res)
        }
    },
    async DeleteHero (req, res) {
        let heroDeleted = await HeroRepository.DeleteHero(req.params.code)
        let heroStatsDeleted = await HeroRepository.DeleteHeroStats(req.params.code)

        if(Common.CheckObject(heroDeleted) && Common.CheckObject(heroStatsDeleted)) {
            res.send({
                Status: 200,
                hero: heroDeleted,
                heroStats: heroStatsDeleted,
                message: 'Successfully'
            })
        }else{
            return Common.SendNotFound(res)
        }
    },
    async UpdateHero (req, res) {
        let hero = new Hero()
        hero.Name = req.body.name       

        let heroUpdated = await HeroRepository.UpdateHero(req.params.code, hero)

        if(Common.CheckObject(heroUpdated)) {
            res.send({
                Status: 200,
                hero: heroUpdated,            
                message: 'Successfully'
            })
        }else{
            return Common.SendNotFound(res)
        }
    },
    async UpdateHeroStats (req, res) {
        let hero = req.body.Hero
        let heroStats = req.body.HeroStats
        let expGained = req.body.ExpGained        
        heroStats = HeroUtils.AddExperienceToHero(hero, heroStats, expGained)
               
        heroStats = await HeroRepository.UpgradeHeroStats(hero.Code, heroStats)

        if(Common.CheckObject(heroStats)) {
            res.send({
                Status: 200,
                heroStats: heroStats,            
                message: 'Successfully'
            })
        }else{
            return Common.SendNotFound(res)
        }
    }
}