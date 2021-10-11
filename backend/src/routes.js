const express = require('express')
const userController = require('./controllers/userController')
const buttonsController = require('./controllers/buttonsController')

const routes = express.Router()

routes.post('/user', userController.create)
routes.get('/user', userController.get)

routes.get('/buttons', buttonsController.get)
routes.put('/button', buttonsController.update)

module.exports = routes
