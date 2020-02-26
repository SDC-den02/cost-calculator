// dependencies
const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const assert = require('assert');
const faker = require('faker');
const _ = require('lodash');
// const Car = require('./Car');
// const Location = require('./Location');

const url = 'mongodb://localhost:27017';
const dbName = 'cost-calculator';

mongoClient.connect(url, (err, client) => {
    assert.equal(null, err);

    const db = client.db(dbName);

    // get access to the relevant collections
    const carsCollection = db.collection('cars');
    const locationsCollection = db.collection('locations');

    // make a bunch of car prices
    let cars = [];
    async function seedCars() {
        for (let i = 0; i < 10001000; i++){
            const price = faker.random.number();
            let newCar = {
                price
            }
            cars.push(newCar);
            if (i % 1000 === 0 ){
                console.log(`Iteration i#${i}`)
                await carsCollection.insertMany(cars);
                cars = [];
            }
        }
    }

    seedCars();
    // make a bunch of locations
    let locations = [];
    async function seedLocations() {
        for (let j = 0; j < 10001000; j++) {
            let newLocation = {
                zipcode: faker.address.zipCode("#####"),
                taxes: faker.random.number(4999),
                fees: faker.random.number(1000),
                rate: faker.finance.amount(0,15,2)
            }
            locations.push(newLocation);
        }
        if (j % 1000 === 0 ){
            console.log(`Iteration j#${j}`)
            await locationsCollection.insertMany(locations);
            location = [];
        }
    }
    seedLocations();
    console.log('Database seeded!')
})

/*

// db connection
mongoose.connect('mongodb://localhost:27017/cost-calculator', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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
      

// car collection and document established
Car.createCollection().then(function(collection){
    console.log('Car collection created');

    const carExample1 = new Car ({
        price: 10000,
    });
    const carExample2 = new Car ({
        price: 11485,
    });
    const carExample3 = new Car ({
        price: 5000,
    });

    // vehicle document creation
    Car.insertMany([
        carExample1,
        carExample2,
        carExample3
    ])
    .then(() => {
        console.log(`Cars ${carExample1}, ${carExample2} has been added`);
    })
})
.catch((error) => {
    console.log(`This is the error => ${error}`)
});
*/