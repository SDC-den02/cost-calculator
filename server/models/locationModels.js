const connection = require('../connections/costCalculatorConnections.js');
const mongoose = require('mongoose');
const Location = require('../db/mongo/Location');

/*
const postZipcodes = (data, callback) => {
    let queryCommand = `INSERT INTO location (zipcode, taxes, fees, rate) VALUES (${data.zipcode}, ${data.taxes}, ${data.fees}, ${data.rates})`;
    connection.query(queryCommand,(error, result, field) => {
        if (error) { 
            console.log(error)
            callback(error)
        } else {
            callback(null, result)
        }
    })
}

const getZipcodes = (zipcode, callback) => {
    const queryText = `SELECT taxes, fees, rate FROM location WHERE zipcode = ${zipcode}`;
    connection.query(queryText, (error, result, field)=>{
        if (error) {
            console.log(error)
            callback(error);
        } else {
            callback(null, result)
        }
    })
}

const updateZipcodes = (zipcode, data, callback) => {
    let queryCommand = `UPDATE location SET rate = ${data} WHERE zipcode = ${zipcode}`;
    connection.query(queryCommand, (error, result, field) => {
        if (error) {
            console.log(error)
            callback(error);
        } else {
            callback(null, result)
        }
    })

}

const deleteZipcodes = (zipcode, callback) => {
    let queryCommand = `DELETE FROM location WHERE zipcode = ${zipcode}`;
    connection.query(queryCommand, (error, result, field) => {
        if (error) {
            console.log(error)
            callback(error)
        } else {
            callback(null, result)
        }
    })
}
*/

module.exports = {
    postZipcodes(data) {
        console.log('This is data ', data);
        var newLocation = new Location({'zipcode': data.zipcode, 'taxes': data.taxes, 'fees': data.fees, 'rate': data.rate});
        return newLocation.save()
    },
    getZipcodes(zipcode){
        return Location.find({zipcode: zipcode}, 'taxes fees rate')
     },
    updateZipcodes(zipcode, rate) {
        return Location.findOneAndUpdate({zipcode: zipcode}, {rate: rate})
    },
    deleteZipcodes(zipcode) {
        return Location.deleteOne({zipcode: zipcode})
    }
}