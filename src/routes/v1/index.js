const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

//City Routes
router.post('/city', CityController.create );
router.post('/cities', CityController.bulkCreate );;
router.delete('/city/:id', CityController.destroy );
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

//Airport Routes
router.post('/airport', AirportController.create);
router.get('/airport/:id', AirportController.get);
router.patch('/airport/:id', AirportController.update);
router.delete('/airport/:id', AirportController.destroy);

// Flight Routes
router.post('/flights', FlightController.create);


module.exports = router ;