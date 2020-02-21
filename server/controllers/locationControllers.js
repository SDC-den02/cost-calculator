const model = require('../models/locationModels.js');

const postZipcode = (req, res, next) => {
    console.log('This is post ', req.body);
    model.postZipcodes(req.body)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        console.log(error)
        res.status(400).send(error);
    })
}

const getZipcode = /*async*/(req, res, next) => {
    console.log('params for location', req.params)
    model.getZipcodes(req.params.zipcode)
    .then(financialData => {
        res.status(200).json({ creditScore:financialData })
    })
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    });
}

const putZipcode = (req, res, next) => {
    model.updateZipcodes(req.params.zipcode, req.body.rate)
    .then(() => {
        res.status(200).json({})
    })
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    });
}

const deleteZipcode = (req, res, next) => {
    model.deleteZipcodes(req.params.zipcode)
    .then(() => {
        res.status(200).json({})
    })
    .catch(error => {
        console.log(error)
        res.status(400).send(error)
    });
}

module.exports = {
    postZipcode,
    getZipcode,
    putZipcode,
    deleteZipcode
}
