const Enum = require('./Enum')
const Hero = require('../models/Hero')
const HeroStats = require('../models/HeroStats')
const Class = require('../models/Class')

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
            case Enum.MODELS.CLASSES:
                model = Class
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
    CheckObject: (obj) => {       
        if(obj !== null) {
            if (obj.length > 0 || obj !== 'undefined') return true
            else return false
        }
        return false
    },
    SendNotFound: (response) => {
        response.send({
            Status: 404,
            data: null,
            message: 'Not Found'
        })
    },
    GenerateNumber: (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }
}