const { ClientErrorCodes } = require('../utils/error-codes');
const validateCreateFlight = ( req , res , next )=>{
  if( 
      console.log( "Flight data ", req.body),
      !req.body.flightNumber || 
      !req.body.airplaneId || 
      !req.body.departureAirportId || 
      !req.body.arrivalAirportId || 
      !req.body.departureTime || 
      !req.body.arrivalTime || 
      !req.body.price 
    ) 
    {//if any of the body params is missing then we will come inside this block
      return res.status(ClientErrorCodes.BAD_REQUEST).json({ 
        data: {},
        success: false,
        message: 'Invalid request body to create a flight',
        error:  'Missing mandatory fields to create a flight'
      });

    }

    next(); // if all the mandatory fields are present then we will call next middleware
}

module.exports = {
  validateCreateFlight
}