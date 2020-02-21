const knex = require('../db/postgres/connection/connection');

module.exports = {
    postCarPrice(data) {
        return knex('cars')
            .insert({price: data}, '*');
    },
    readCarPrice(id) {
        return knex('cars')
            .where('id', id)
            .first();
    },
    updateCarPrice(id, data) {
        return knex('cars')
            .where('id', id)
            .update({price: data});
    },
    deleteCarPrice(id) {
        return knex('cars')
            .where('id', id)
            .del();
    }
}