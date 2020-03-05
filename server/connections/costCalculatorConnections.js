const mongoose = require('mongoose');

var connection = function(){
  // database connection port
  mongoose.connect('172.17.0.2/cost-calculator', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('we\'re connected');
  })

}

module.exports = connection;