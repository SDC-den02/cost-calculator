const Car = require('../db/mongo/Car');
const mongoose = require('mongoose');

// database connection port
mongoose.connect('mongodb://localhost:27017/cost-calculator', {
useNewUrlParser: true,
useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
console.log('we\'re connected');
})
/*
const postCarPrice = (data, callback) => {
    // console.log('this is data in models', data)
    let queryCommand = `INSERT INTO cars (cost) VALUES (${data})`;
    connection.query(queryCommand, (error, result, field) => {
        if (error) {
            console.log(error)
            callback(error)
        } else { 
            callback(null, result)
        }
    })
}

const readCarPrice = (id, callback) => {
    const queryText = `SELECT cars FROM cost WHERE id = ${id}`;
    connection.query(queryText, (error, result, field) => {
        if (error) {
            console.log(error)
            callback(error)
        } else {
            //error first... dont forget.
            callback(null, result)
        }
    })
}

const updateCarPrice = (id, data, callback) => {
    console.log('In models data is ', data)
    let queryCommand = `UPDATE cars SET cost = ${data} WHERE id = ${id}`;
    connection.query(queryCommand, (error, result, field) => {
        if (error) {
            console.log(error)
            callback(error)
        } else {
            callback(null, result);
        }
    })
}

const deleteCarPrice = (id, callback) => {
    let queryCommand = `DELETE FROM cars WHERE id = ${id}`;
    connection.query(queryCommand, (error, result, field) => {
        if (error) {
            console.log(error)
            callback(error)
        } else {
            callback(null, result);
        }
    })
}
*/


module.exports = {
    postCarPrice(data) {
        console.log('this is data in models', data);
        var newCar = new Car({'price': data });
        console.log('This is newCar ', newCar);
        newCar.save() // change to mongoose format
        .then((data) => {
            console.log(`Added new price of ${data}`)
        })
        .catch((error) => {
            console.log(error)
        });
    },
    /*readCarPrice,
    updateCarPrice,
    deleteCarPrice*/
}