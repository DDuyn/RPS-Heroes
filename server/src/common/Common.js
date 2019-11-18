const Enum = require('./Enum')
const Hero = require('../models/Hero')

module.exports = {
    GetModel: function GetModel (Model) {
        let model = 'undefined'
        switch (Model) {
            case Enum.MODELS.HERO:
                model = Hero
        }

        return model
    },
    Query: function Query (Model, Filter, Order, Limit) {
        return Query = {
            Model: Model,
            Filter: Filter,
            Order: Order,
            Limit: Limit
        }
    },
    SendResponse: function SendResponse (obj, response) {
        if (obj.length > 0 || obj !== 'undefined') {
            response.send({
                Status: 200,
                data: obj
            })
        }
    }
}