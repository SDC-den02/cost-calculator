const faker = require('faker');

const createFakePrices = () => ({
  price: faker.random.number()
});

exports.seed = async (knex) => {
  let fakePrices = [];
  const desiredFakePrices = 10001000;
    for(let i = 0; i < desiredFakePrices; i++){
      fakePrices.push(createFakePrices());
      if (i % 1000 === 0) {
        await knex('cars').insert(fakePrices);
        fakePrices = [];
      }
    }
};