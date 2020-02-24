const mongoose = require('mongoose');
const Schema = mongoose.Scehma;

var LocationSchema = new Schema ({
    zipcode: {type: Number, default: 0},
    taxes: {type: Number, default: 0},
    fees: {type: Number, default: 0},
    rate: {type: mongoose.Decimal128, default: 0}
})

module.exports = mongoose.model('Location', LocationSchema);
