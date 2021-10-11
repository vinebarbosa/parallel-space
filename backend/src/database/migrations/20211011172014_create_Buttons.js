exports.up = function (knex) {
  return knex.schema.createTable('buttons', function (table) {
    table.string('id').primary()
    table.string('type').notNullable()
    table.string('category').notNullable()
    table.string('description').notNullable()
    table.string('position').notNullable()

    table.string('user_id').notNullable()

    table.foreign('user_id').references('id').inTable('users')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('buttons')
}
