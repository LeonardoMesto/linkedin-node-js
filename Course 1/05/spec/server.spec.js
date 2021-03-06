describe('calc', () => {
    it('sould multiply 2 and 2', () => {
        expect(2*2).toBe(4)
    })
})

var request = require('request')
// npm install --save-dev request
describe('get messages', () => {
    it('should return 200 ok', (done) => {
        request.get('http://localhost:3000/messages', (err, res) => {
            // console.log(res.body)
            expect(res.statusCode).toEqual(200)
            done()
        })
    })

    it('should return a list, thats not empty', (done) => {
        request.get('http://localhost:3000/messages', (err, res) => {
            expect(JSON.parse(res.body).length).toBeGreaterThan(0)
            done()
        })
    })
})

describe('get messages from user', () => {
    it('should return 200 ok', (done) => {
        request.get('http://localhost:3000/messages/tim', (err, res) => {
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
    it('name should be yim', (done) => {
        request.get('http://localhost:3000/messages/tim', (err, res) => {
            expect(JSON.parse(res.body)[0].name).toEqual('tim')
            done()
        })
    })
})

describe('multiply', () => {
    it('should multiply two numbers', () => {
        expect(myFunction(2,6)).toBe(12)
    })
})

function myFunction(x,y) {
    return x*y
}