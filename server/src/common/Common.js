const Enum = require('./Enum')
const Hero = require('../models/Hero')
const HeroStats = require('../models/HeroStats')

module.exports = {
    GetModel: (Model) => {
        let model = 'undefined'
        switch (Model) {
            case Enum.MODELS.HERO:
                model = Hero
                break
            case Enum.MODELS.HEROSTATS:
                model = HeroStats
                break
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
        if(obj !== null) {
            if (obj.length > 0 || obj !== 'undefined') {
                response.send({
                    Status: 200,
                    data: obj,
                    message: 'Successfully'
                })
            }
        }else{
            response.send({
                Status: 404,
                data: null,
                message: 'Not Found'
            })
        }
    },
    GenerateNumber: (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }
}