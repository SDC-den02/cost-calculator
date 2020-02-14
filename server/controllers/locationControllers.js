const model = require('../models/locationModels.js');

const postZipcode = (req, res, next) => {
    model.postZipcodes(req.body.data, (error, result) => {
        if (error) {
            console.log(error)
            res.status(400).send(error);
        } else {
            res.status(200).json({})
        }
    })
}

const getZipcode = (req, res, next) => {
    console.log('params for location', req.params)
    model.getZipcodes(req.params.zipcode, (error, result) => {
        if (error) {
            console.log(error)
            res.status(400).send(error)
        } else {
            res.status(200).json({ creditScore:result })
        }
    })
}

const putZipcode = (req, res, next) => {
    model.updateZipcodes(req.params.zipcode, req.body.rates, (error, result) => {
        if (error) {
            console.log(error)
            res.status(400).send(error)
        } else {
            res.status(200).json({})
        }
    })
}

const deleteZipcode = (req, res, next) => {
    model.deleteZipcodes(req.params.zipcode, (error, result) => {
        if (error) {
            console.log(error)
            res.status(400).send(error)
        } else {
            res.status(200).json({})
        }
    })
}

module.exports = {
    postZipcode,
    getZipcode,
    putZipcode,
    deleteZipcode
}
