const mongoose = require('mongoose');
const Car = require('../db/mongo/Car');

mongoose.connect('mongodb://localhost:27017/cost-calculator', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false  
});
  
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we\'re connected');
})

module.exports = {
    postCarPrice(data) {
        console.log('this is data in models', data);
        var newCar = new Car({'price': data });
        return newCar.save() // changed to mongoose format instead of mongoDB library
        .then((data) => {
            console.log(`Added new price of ${data}`)
        })
        .catch((error) => {
            console.log(error)
        });
    },
    readCarPrice(id) {
        return Car.findById(id)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
    },
    updateCarPrice(id, data) {
        return Car.findByIdAndUpdate(id, {$set: {price: data}})
    },
    deleteCarPrice(id) {
        console.log(id)
        return Car.deleteOne({_id: id})
    }
}