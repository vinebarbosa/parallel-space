const routes = require('express').Router()

const open = require('./middlewares/open')
const auth = require('./middlewares/auth')

const SessionController = require('./controllers/SessionController')
const NetworkController = require('./controllers/NetworkController')

routes.post('/login', SessionController.login)
routes.post('/logout', SessionController.logout)

routes.post('/open', auth, open)

routes.get('/localaddress', auth, NetworkController.get)

module.exports = routes
