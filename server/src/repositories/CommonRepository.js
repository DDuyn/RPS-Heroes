const Enum = require('../common/Enum')
const Common = require('../common/Common')
const Queries = require('../common/Queries')

module.exports = {
    GetLastCode: (Model) => {
        let order = { sort: { Code: -1 }}
        return Queries.FindOne(Common.Query(Model, {}, order))
    }
}