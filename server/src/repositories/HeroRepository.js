const Enum = require('../common/Enum')
const Common = require('../common/Common')
const Queries = require('../common/Queries')

module.exports = {
    CreateHero: function CreateHero (Hero) {        
        return Queries.Save(Hero)
    },
    GetAllHeroesByUser: function GetAllHeroesByUser (User) {
        let model = Common.GetModel(Enum.MODELS.HERO)
        let filter = {User: User}
        let order = { sort: { Code: 1 } }
        return Queries.Find(Common.Query(model, filter, order))
    },
    GetHero: function GetHero (Code) {
        let model = Common.GetModel(Enum.MODELS.HERO)
        let filter = {Code: Code}
        return Queries.FindOne(Common.Query(model, filter))
    },
    DeleteHero: function DeleteHero (Code) {
        let model = Common.GetModel(Enum.MODELS.HERO)
        let filter = {Code: Code}
        return Queries.DeleteOne(Common.Query(model, filter))
    }

}