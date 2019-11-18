const Enum = require('./Enum')
const Hero = require('../models/Hero')

module.exports = {
    GetModel: (Model) => {
        let model = 'undefined'
        switch (Model) {
            case Enum.MODELS.HERO:
                model = Hero
        }

        return model
    },
    Query: (Model, Filter, Order, Limit, Update) => {
        return Query = {
            Model: Model,
            Filter: Filter,
            Order: Order,
            Limit: Limit,
            Update: Update
        }
    },
    SendResponse: (obj, response) => {
        if (obj.length > 0 || obj !== 'undefined') {
            response.send({
                Status: 200,
                data: obj
            })
        }
    }
}