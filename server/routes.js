const HeroController = require('./src/controllers/HeroController')
const ClassController = require('./src/controllers/ClassController')

module.exports = (app) => {
    // Hero
    app.post('/hero/create', HeroController.CreateHero)
    app.get('/hero/all/:user', HeroController.GetAllHeroesByUser)
    app.get('/hero/:code', HeroController.GetHero)
    app.delete('/hero/delete/:code', HeroController.DeleteHero)
    app.put('/hero/update/:code', HeroController.UpdateHero)
    app.put('/addExperience', HeroController.UpdateHeroStats)

    // Class
    app.get('/classes', ClassController.GetClasses)
}