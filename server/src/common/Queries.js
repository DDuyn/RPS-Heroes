const Common = require('./Common')

module.exports = {
    Find: function Find (Query) {
        return Query.Model.find(Query.Filter, {}, Query.Order)
            .then(data => { return data })
            .catch(e => { console.error(e) })
    },
    FindOne: function FindOne (Query) {
        return Query.Model.findOne(Query.Filter, {}, Query.Order)
            .then(data => { return data })
            .catch(e => { console.error(e) })
    },
    Save: function Save (Model) {        
        return Model.save()
            .then(data => { return data })
            .catch(e => console.error(e))
    },
    DeleteOne: function DeleteOne (Query) {
        return Query.Model.deleteOne(Query.Filter)
            .then(data => { return data })
            .catch(e => { console.error(e) })
    }
}