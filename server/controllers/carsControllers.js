const model = require('../models/carsModels.js');

const postCars = (req, res, next) => {
  console.log('This is post ', req.body.cost);
  model.postCarPrice(req.body.cost, (error, result) => {
    if (error) {
      console.log(error)
      res.status(400).send(error)
    } else {
      console.log(`Cost has been added`)
      console.log(result)
      res.status(200).json({})
    }
  })
}

const getCars = (req, res, next) => {
  console.log('params for car', req.params)
  model.readCarPrice(req.params.id, (error, result) => {
    if (error) {
      console.log(error)
      res.status(400).send(error)
    } else {
      res.status(200).json({ car:result })
    }
  })
}

const updateCars = (req, res, next) => {
  console.log('This is update ', req.body.cost);
  model.updateCarPrice(req.params.id, req.body.cost, (error, result) => {
    if (error) {
      console.log(error)
      res.status(400).send(error)
    } else {
      res.status(200).json({})
    }
  })
}

const deleteCars = (req, res, next) => {
  console.log('Deleting cost for car ID#', req.params.id);
  model.deleteCarPrice(req.params.id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).send(error)
    } else {
      res.status(200).json({})
    }
  })
}


module.exports = {
  postCars,
  getCars,
  updateCars,
  deleteCars
}