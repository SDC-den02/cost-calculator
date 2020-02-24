const connection = require('../connections/costCalculatorConnections.js');
const Car = require('../db/mongo/Car');

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
        db.collection('cars').insertOne(data)
        .then((data) => {
            console.log(`Added new price of ${data}`)
        })
        .catch((error) => {
            console.log(error)
        })         
    },
    /*readCarPrice,
    updateCarPrice,
    deleteCarPrice*/
}