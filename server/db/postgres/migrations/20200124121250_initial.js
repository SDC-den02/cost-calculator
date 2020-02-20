exports.up = function(knex, Promise) {
    return knex.schema.createTable('location', (table) => {
        table.increments('id').primary();
        table.integer('zipcode').notNullable();
        table.integer('taxes').notNullable();
        table.integer('fees').notNullable();
        table.decimal('rate').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("location")
};
