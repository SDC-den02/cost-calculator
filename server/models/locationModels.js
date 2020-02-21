const knex = require('../db/postgres/connection/connection');


module.exports = {
    postZipcodes(data) {
       return knex('location')
        .insert({zipcode: data.zipcode, taxes: data.taxes, fees: data.fees, rate: data.rate}, '*');
    },
    getZipcodes(zipcode) {
       return knex('location')
        .where('zipcode', zipcode)
        .first();
    },
    updateZipcodes(zipcode, data) {
        console.log('Inside of controller ', data.rate)
       return knex('location')
        .where('zipcode', zipcode)
        .update({rate: data.rate});
    },
    deleteZipcodes(zipcode) {
       return knex('location')
        .where('zipcode', zipcode)
        .del();
    } 
}