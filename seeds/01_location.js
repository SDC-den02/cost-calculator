exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "location"; ALTER SEQUENCE location_id_seq RESTART WITH 6;')
    .then(function () {
      // Inserts seed entries
      return knex('location').insert([
        {id: 1, zipcode: '60030', taxes: '1062', fees: '233', rate: '4.00'},
        {id: 2, zipcode: '80030', taxes: '1000', fees: '200', rate: '3.50'},
        {id: 3, zipcode: '80233', taxes: '902', fees: '150', rate: '4.25'},
        {id: 4, zipcode: '80012', taxes: '981', fees: '175', rate: '5.00'},
        {id: 5, zipcode: '50012', taxes: '1262', fees: '250', rate: '1.00'}
      ]);
    });
};
