const Enum = require('../common/Enum')
const Common = require('../common/Common')
const Queries = require('../common/Queries')

module.exports = {
    GetClasses: () => {
        let model = Common.GetModel(Enum.MODELS.CLASSES)
        return Queries.Find(Common.Query(model))
    }
}