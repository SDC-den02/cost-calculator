exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "cars"; ALTER SEQUENCE cars_id_seq RESTART WITH 6;')
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, price: '10000'},
        {id: 2, price: '11485'},
        {id: 3, price: '5000'},
        {id: 4, price: '6892'},
        {id: 5, price: '20000'}
      ]);
    });
};