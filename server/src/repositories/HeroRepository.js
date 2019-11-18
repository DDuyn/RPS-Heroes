const Enum = require('../common/Enum')
const Common = require('../common/Common')
const Queries = require('../common/Queries')

module.exports = {
    CreateHero: (Hero) => {        
        return Queries.Save(Hero)
    },
    GetAllHeroesByUser: (User) => {
        let model = Common.GetModel(Enum.MODELS.HERO)
        let filter = {User: User}
        let order = { sort: { Code: 1 } }
        return Queries.Find(Common.Query(model, filter, order))
    },
    GetHero: (Code) => {
        let model = Common.GetModel(Enum.MODELS.HERO)
        let filter = {Code: Code}
        return Queries.FindOne(Common.Query(model, filter))
    },
    DeleteHero: (Code) => {
        let model = Common.GetModel(Enum.MODELS.HERO)
        let filter = {Code: Code}
        return Queries.DeleteOne(Common.Query(model, filter))
    },
    UpdateHero: (Code, Hero) => {
        let model = Common.GetModel(Enum.MODELS.HERO)
        let filter = {Code: Code}
        let update = {Name: Hero.Name}
        return Queries.UpdateOne(Common.Query(model, filter, null, null, update))
    }

}