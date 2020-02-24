// dependencies
const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Car = require('./Car');

// db connection
mongoose.connect('mongodb://localhost:27017/echoPark', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// initial seed of vehicle collection and start of promise chain
// vehicle collection and document established first since other documents require vehicle _id
Car.createCollection().then(function(collection){
    console.log('Vehicle collection created');

    const carExample1 = new Vehicle ({
        price: 10000,
    });
    const carExample2 = new Vehicle ({
        price: 11485,
    });
    const carExample3 = new Vehicle ({
        price: 5000,
    });

    // vehicle document creation
    Car.insertMany([
        carExample1,
        carExample2,
        carExample3
    ])
});
