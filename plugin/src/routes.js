const routes = require('express').Router()

const open = require('./middlewares/open')
const auth = require('./middlewares/auth')

const SessionController = require('./controllers/SessionController')
const NetworkController = require('./controllers/NetworkController')
const UploadController = require('./controllers/UploadController')
const ObsController = require('./controllers/ObsController')

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

routes.get('/scenes', auth, ObsController.getScenes)
routes.post('/scene', auth, ObsController.swithScene)
routes.post('/record', auth, ObsController.record)
routes.post('/stream', auth, ObsController.stream)

module.exports = routes
