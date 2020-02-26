const connection = require('../connections/costCalculatorConnections.js');
const mongoose = require('mongoose');
const Location = require('../db/mongo/Location');

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