const model = require('../models/locationModels.js');

const postZipcode = (req, res, next) => {
    model.postZipcodes(req.body)
    .then(() => {
        res.status(200).json({})
    })
    .catch((error) => {
        console.log(error)
        res.status(400).send(error);
    })
}

const getZipcode = (req, res, next) => {
    console.log('params for location', req.params)
    model.getZipcodes(req.params.zipcode)
    .then((result) => {
        res.status(200).json({ creditScore:result })
    })
    .catch((error) => {
        console.log(error)
        res.status(400).send(error)
    })
}

const putZipcode = (req, res, next) => {
    model.updateZipcodes(req.params.zipcode, req.body.rate)
    .then(() => {
        res.status(200).json({})
    })
    .catch((error) => {
        console.log(error)
        res.status(400).send(error)
    })
}

const deleteZipcode = (req, res, next) => {
    model.deleteZipcodes(req.params.zipcode)
    .then(() => {
        res.status(200).json({})
    })
    .catch((error) => {
        console.log(error)
        res.status(400).send(error)
    })
}

module.exports = {
    postZipcode,
    getZipcode,
    putZipcode,
    deleteZipcode
}
