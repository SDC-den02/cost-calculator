exports.up = function(knex, Promise) {
    return knex.schema.createTable('location', (table) => {
        table.increments('id').primary();
        table.integer('zipcode').notNullable();
        table.decimal('creditscore').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("location")
};
