exports.up = function (knex) {
  return knex.schema.createTable('icons', function (table) {
    table.string('id').primary()
    table.string('key').notNullable()
    table.string('name').notNullable()
    table.string('url').notNullable()

    table.string('button_id').notNullable()

    table.foreign('button_id').references('id').inTable('buttons')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('icons')
}
