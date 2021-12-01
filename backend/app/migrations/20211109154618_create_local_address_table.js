exports.up = function (knex) {
  return knex.schema.createTable('local_addresses', function (table) {
    table.string('local_address').notNullable()
    table.string('user_id').notNullable()
    table.foreign('user_id').references('id').inTable('users')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('local_addresses')
}
