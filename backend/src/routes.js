const express = require('express')
const userController = require('./controllers/userController')

const routes = express.Router()

routes.post('/user', userController.create)
routes.get('/user', userController.get)

module.exports = routes
