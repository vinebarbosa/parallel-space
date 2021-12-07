const express = require('express')
const obs = require('./obs')

const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(5554, obs.connect)
