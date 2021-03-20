const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')

chai.use(chaiHttp)

const expect = chai.expect

// Test that status returns the correct status
describe('status', () => {
  describe('GET /status', () => {
    it('it should return the correct status', (done) => {
      chai.request(server)
        .get('/api/status')
        .end((err, res) => {
          if (err !== null) {
            console.log('Status error: ', err)
          }
          expect(res).to.have.status(201)
          done()
        })
    })
  })
})

// Test that info returns correctly based on the inputs
describe('info', () => {
  describe('Success GET /info', () => {
    it('it should properly get the rate for today', async () => {
      chai.request(server)
        .get('/api/info')
        .query({
          base: 'EUR',
          current: 'GBP'
        })
        .end((err, res) => {
          if (err !== null) {
            console.log('Status error: ', err)
          }
          expect(res).to.have.status(201)
          const responseValue = res.text
          chai.assert(responseValue > 0 && responseValue < 5, 'Rate is wrong')
        })
    })
  })
  describe('Failure 1 GET /info', () => {
    it('it should return an error status (Invalid current)', async () => {
      chai.request(server)
        .get('/api/info')
        .query({
          base: 'EUR',
          current: 'AUS'
        })
        .end((err, res) => {
          if (err !== null) {
            console.log('Status error: ', err)
          }
          expect(res).to.have.status(400)
          const responseValue = res.text
          chai.assert(responseValue === 'Current AUS is not supported.', 'Wrong response')
        })
    })
  })
  describe('Failure 2 GET /info', () => {
    it('it should return an error status (Invalid base)', async () => {
      chai.request(server)
        .get('/api/info')
        .query({
          base: 'AUS',
          current: 'EUR'
        })
        .end((err, res) => {
          if (err !== null) {
            console.log('Status error: ', err)
          }
          expect(res).to.have.status(400)
          const responseValue = res.text
          chai.assert(responseValue === 'Base AUS is not supported.', 'Wrong response')
        })
    })
  })
})
