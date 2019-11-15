const HeroController = require('./src/controllers/HeroController')

module.exports = (app) => {
    app.post('/hero/create', HeroController.CreateHero)
    app.get('/hero/all/:user', HeroController.GetAllHeroesByUser)
    app.get('/hero/:code', HeroController.GetHero)
    app.delete('/hero/delete/:code', HeroController.DeleteHero)
}