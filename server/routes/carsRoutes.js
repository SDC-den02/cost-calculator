const express = require('express');
const router = express.Router();
const controller = require('../controllers/carsControllers.js');

router.post('/', controller.postCars);
router.get('/:id', controller.getCars);
// router.put('/:id', controller.updateCars);
// router.delete('/:id', controller.deleteCars);

module.exports = router;