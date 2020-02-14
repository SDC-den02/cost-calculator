const express = require('express');
const router = express.Router();
const controller = require('../controllers/locationControllers.js');

router.post('/', controller.postZipcode)
router.get('/:zipcode', controller.getZipcode)
router.put('/:zipcode', controller.putZipcode)
router.delete('/:zipcode', controller.deleteZipcode)

module.exports = router;