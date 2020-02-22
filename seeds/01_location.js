const faker = require('faker');

const createFakeLocation = () => ({
  zipcode: faker.address.zipCode("#####"),
  taxes: faker.random.number(4999),
  fees: faker.random.number(1000),
  rate: faker.finance.amount(0,15,2)
});

exports.seed = async (knex) => {
  let fakeLocations = [];
  const desiredFakeLocations = 10001000;
    for(let i = 0; i < desiredFakeLocations; i++){
      fakeLocations.push(createFakeLocation());
      if (i % 1000 === 0) {
        await knex('location').insert(fakeLocations);
        fakeLocations = [];
      }
    }
};