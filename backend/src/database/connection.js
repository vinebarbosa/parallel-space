const knex = require('knex')

const knexConfig = require('./../../knexfile')

const connection = knex(knexConfig.staging)

module.exports = connection
