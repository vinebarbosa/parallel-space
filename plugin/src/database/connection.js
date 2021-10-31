const knex = require('knex')

const knexConfig = require('./../../knexfile')

const connection = knex(knexConfig.development)

module.exports = connection
