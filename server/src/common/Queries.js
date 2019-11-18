const Common = require('./Common')

module.exports = {
    Find: (Query) => {
        return Query.Model.find(Query.Filter, {}, Query.Order)
            .then(data => { return data })
            .catch(e => { console.error(e) })
    },
    FindOne: (Query) => {
        return Query.Model.findOne(Query.Filter, {}, Query.Order)
            .then(data => { return data })
            .catch(e => { console.error(e) })
    },
    Save: (Model) => {        
        return Model.save()
            .then(data => { return data })
            .catch(e => console.error(e))
    },
    DeleteOne: (Query) => {
        return Query.Model.deleteOne(Query.Filter)
            .then(data => { return data })
            .catch(e => { console.error(e) })
    },
    UpdateOne: (Query) => {
        return Query.Model.findOneAndUpdate(Query.Filter, Query.Update, {new: true})
            .then(data => { return data })
            .catch(e => { console.error(e) })

    }
}