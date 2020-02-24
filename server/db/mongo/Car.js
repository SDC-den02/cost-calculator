const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CarSchema = new Schema ({
    price: {type: Number, default: 0}
})

module.exports = mongoose.model('Car', CarSchema);
