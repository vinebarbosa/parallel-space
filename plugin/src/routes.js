const routes = require('express').Router()

const open = require('./middlewares/open')
const auth = require('./middlewares/auth')

const SessionController = require('./controllers/SessionController')

routes.post('/login', SessionController.login)
routes.post('/logout', SessionController.logout)

routes.post('/open', auth, open)

module.exports = routes
