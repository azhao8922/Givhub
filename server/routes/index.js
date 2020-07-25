const express = require('express')
const path = require('path')
const MessagingResponse = require('twilio').twiml.MessagingResponse
const accountSid = 'ACa9ba0ed93dc599bfa80caf48e9a6d25a'
const authToken = 'ad01015b7c6ef4af0a36133c971f8949'
const client = require('twilio')(accountSid, authToken)

const auth = require('./auth')
const user = require('./user')
const users = require('./users')
const donor = require('./donor')
const courier = require('./courier')
const sms = require('./sms')
const foodbank = require('./foodbank')

const router = express.Router()

router.use('/api/auth', auth)
router.use('/api/user', user)
router.use('/api/users', users)
router.use('/api/donors', donor)
router.use('/api/couriers', courier)
router.use('/api/foodbanks', foodbank)

router.post('/sms', (req, res) => {
  client.messages
    .create({
      body: req.body.message,
      from: '+17372524728',
      to: req.body.to
    })
    .then(message => console.log(message.sid))
  res.sendStatus(201)
})

module.exports = router
