const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();
const { FlightMiddlewares} = require('../../middlewares/index');

//City Routes
router.post('/city', CityController.create );
router.post('/cities', CityController.bulkCreate );;
router.delete('/city/:id', CityController.destroy );
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);


// Flight Routes
router.post('/flights', 
  FlightMiddlewares.validateCreateFlight , 
  FlightController.create);
router.get('/flights', FlightController.getAll);

router.post( '/airports', AirportController.create);

module.exports = router ;  