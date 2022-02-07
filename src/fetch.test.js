const frisby = require('frisby')
const { jsonStrict } = require('frisby/src/frisby/expects')
const Joi = frisby.Joi

// set headers authorization
frisby.globalSetup({
    request: {
        headers: {
            'Authorization': 'Basic ' + Buffer.from("admin:password").toString('base64'),
            'Content-Type': 'application/json',
        }
    }
})

// https://localhost:8080
const API_getUser = '/user/list'
const API_getGroup = '/group/list'

const checkPropTypes_status = {
    code: Joi.number().required(),
    data: Joi.object().required(),
    message: Joi.string().required(),
    messageCode: Joi.string().required()
}

// testing fetch ------
// testing get user
it('testing api get user', () => {
    return frisby
        .get(API_getUser)
        .expect('status', 200)
        .expect('jsonTypes', checkPropTypes_status)
        .expect('jsonTypes', 'data', {
            content: Joi.array().required(),
            totalElements: Joi.number().required()
        })
        .expect('jsonTypes', 'data.content.*', {
            id: Joi.string().required(),
            userName: Joi.string().required(),
            password: Joi.string().required(),
            email: Joi.string().email().required(),
            mobilePhone: Joi.string().allow('').required(),
        })
        .then(response => {
            let x = (JSON.parse(response._body))
            console.log(x.data)
        })
})

// testing get group
it('testing api get group', () => {
    return frisby
        .get(API_getGroup)
        .expect('status', 200)
        .expect('jsonTypes', checkPropTypes_status)
        .expect('jsonTypes', 'data', {
            content: Joi.array().required(),
            totalelementys: Joi.number().required()
        })
        .expect('jsonTypes', 'data.content.*', {
            id: Joi.string().required(),
            groupName: Joi.string().required(),
            rights: Joi.array().required()
        })
})
