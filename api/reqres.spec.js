const {expect} = require('chai').use(require('chai-json-schema'))
const supertest = require('supertest')
const api = supertest('https://reqres.in')

const { getUsers, listUsers } = require('./json_schema/users')

describe('Endpoint login test', () => {
    it('Login success', async() => {
        const bodyRequest = {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        }

        const response = await api.post('/api/login').send(bodyRequest)
        const body = response.body
        expect(response.status).to.equal(200)
        expect(body.token).to.exist
    })
    it('Login failed missing email password', async() => {
        const response = await api.post('/api/login').send({})
        const body = response.body
        expect(response.status).to.equal(400)
        expect(body.error).to.exist
        expect(body.error).to.be.equal('Missing email or username')
    })
})
describe('Endpoint user test', () => {
    it('Get user list success', async() => {
        const response = await api.get('/api/users').query({page: 1, per_page: 10})
        const body = response.body
        expect(response.status).to.equal(200)
        expect(body).to.be.jsonSchema(listUsers)
    })
    it('Get user by id success', async() => {
        const response = await api.get('/api/users/2')
        const body = response.body
        expect(response.status).to.equal(200)
        expect(body).to.be.jsonSchema(getUsers)
    })
    it('Get user by id not found', async() => {
        const response = await api.get('/api/users/999')
        const body = response.body
        expect(response.status).to.equal(404)
    })
    it('Update user success', async() => {
        const response = await api.put('/api/users/2')
        const body = response.body
        expect(response.status).to.equal(200)
        expect(body.updatedAt).to.exist
    })
    it('Update patch user success', async() => {
        const response = await api.patch('/api/users/2')
        const body = response.body
        expect(response.status).to.equal(200)
        expect(body.updatedAt).to.exist
    })
    it('Delete user success', async() => {
        const response = await api.delete('/api/users/2')
        const body = response.body
        expect(response.status).to.equal(204)
    })
})