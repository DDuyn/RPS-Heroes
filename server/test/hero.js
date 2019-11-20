let Hero = require('../src/models/Hero')
let chai = require('chai')
let chaitHttp = require('chai-http')
let should = chai.should()
let url = 'http://localhost:8081'
chai.use(chaitHttp)

describe('Heroes', () => {
    beforeEach((done) => {
        Hero.remove({}, (e) => {
            done()
        })
    })
})

describe('Get All Heroes by User', () => {
    it('it should GET all Heroes By user', (done)=> {
        chai.request(url)
            .get('/hero/all/DDuyn')
            .end((e, res) => {
                res.should.have.status(200)
                res.body.data.should.be.a('array')
                res.body.data.length.should.be.equal(4)
            done()
            })
    })
})

describe('Hero Not Found', () => {
    it('it should return Hero Not Found', (done) => {
        chai.request(url)
            .get('/hero/8')
            .end((e, res) => {
                res.should.have.status(200)
                res.body.message.should.be.equal("Not Found")
                res.body.Status.should.be.equal(404)
                should.equal(res.body.data, null)
            done()
            })
    })
})