const { Flights } = require('../models/index');

class FlightsRepository{

    async createFlight( data ){
        try{
          const flight = await Flights.create( data );
          return flight;
        }catch( error ){
          console.log("Something went wrong in creating flight in repo layer", error);
          throw { error };

        }
    }
}

module.exports = FlightsRepository;