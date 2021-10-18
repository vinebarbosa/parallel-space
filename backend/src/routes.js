const express = require('express')
const multer = require('multer')

const userController = require('./controllers/userController')
const sessionController = require('./controllers/sessionController')
const buttonsController = require('./controllers/buttonsController')
const iconsController = require('./controllers/iconsController')

const multerConfig = require('./config/multer')

const routes = express.Router()

routes.post('/user', userController.create)

routes.post('/session', sessionController.create)

routes.get('/buttons', buttonsController.get)
routes.put('/button', buttonsController.update)

routes.post(
  '/image',
  multer(multerConfig).single('file'),
  iconsController.upload
)
routes.get('/image/:id', iconsController.get)
routes.delete('/image/:id', iconsController.delete)

module.exports = routes
