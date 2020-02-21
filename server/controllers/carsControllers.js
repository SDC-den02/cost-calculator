const model = require('../models/carsModels.js');

const postCars = (req, res, next) => {
  console.log('This is post ', req.body.price);
  model.postCarPrice(req.body.price)
    .then( data => { 
      console.log(`Cost has been added`)
      console.log(data)
      res.status(200).json({})
    })
    .catch(error => {
      console.log(error)
      res.status(400).send(error)
    });
}

const getCars = (req, res, next) => {
  console.log('params for car', req.params)
  model.readCarPrice(req.params.id)
    .then(car => {
      res.status(200).json(car)
    })
    .catch(error => {
      console.log(error)
      res.status(400).send(error)
    });
}

const updateCars = (req, res, next) => {
  console.log(`Updating for ${req.params.id} the new price is `, req.body.price);
  model.updateCarPrice(req.params.id, req.body.price)
  .then( data => {
    console.log('Total # of items updated ', data)
    res.status(200).json({data})
  })
  .catch(error => {
    console.log(error);
    res.status(400).send(error);
  })
}

const deleteCars = (req, res, next) => {
  console.log('Deleting cost for car ID#', req.params.id);
  model.deleteCarPrice(req.params.id) 
    .then(() => {
      res.status(200).json({})
    })
    .catch(error => {
      console.log(error);
      res.status(400).send(error)
    });      
}


module.exports = {
  postCars,
  getCars,
  updateCars,
  deleteCars
}