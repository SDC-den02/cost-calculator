exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', (table) => {
        table.increments('id').primary();
        table.integer('price').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("cars");
};