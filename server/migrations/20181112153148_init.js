
exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('users', table => {
      table.uuid('id').unique().primary().notNullable()
      table.string('name').notNullable()
      table.string('email').unique().notNullable()
      table.string('password').notNullable()
      table.timestamps()
    })
    .createTable('todos', table => {
      table.uuid('id').unique().primary().notNullable()
      table.string('task').notNullable()
      table.uuid('user_id')
      table.foreign('user_id').references('id').inTable('users')
      table.timestamps()
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('todos')
}
