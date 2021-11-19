const routes = require('express').Router()

const open = require('./middlewares/open')
const auth = require('./middlewares/auth')

const SessionController = require('./controllers/SessionController')
const NetworkController = require('./controllers/NetworkController')
const UploadController = require('./controllers/UploadController')

routes.post('/login', SessionController.login)
routes.post('/logout', SessionController.logout)

routes.post('/open', auth, open)

routes.get('/localaddress', auth, NetworkController.get)

routes.post(
  '/shortcut',
  auth,
  UploadController.upload,
  UploadController.handleResponse
)

module.exports = routes
