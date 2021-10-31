exports.up = function (knex) {
  return knex.schema.createTable('user', function (table) {
    table.string('token').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user')
}
