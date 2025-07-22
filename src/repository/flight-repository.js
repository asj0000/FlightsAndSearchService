const { Flights } = require('../models/index');
const { Op }= require('sequelize');

class FlightsRepository{

    #createFilter( data ){
        let filter = {};
        if( data.arrivalAirportId){
          filter.arrivalAirportId = data.arrivalAirportId;
        }
        if( data.departureAirportId){
          filter.departureAirportId = data.departureAirportId;
        }
        
        if( data.minPrice && data.maxPrice){
          Object.assign( filter , { 
            price : { 
              [Op.between]:  [data.minPrice,  data.maxPrice]
            }
          });
        }
        else{
          if( data.minPrice ){
            Object.assign( filter, {  price : {[Op.gte]: data.minPrice}} ); // this will set a minPrice value in our filter object, gte = greater than or equal to
          }                                                                 // Op is used to as operators in sequelize to make customized queries

          if( data.maxPrice ){
            Object.assign( filter , { price : { [Op.lte ]: data.maxPrice}});
          }
        }
        return filter;
    }

    async createFlight( data ){
        try{
          const flight = await Flights.create( data );
          return flight;
        }catch( error ){
          console.log("Something went wrong in creating flight in repo layer", error);
          throw { error };

        }
    }

    async getFlight( flightId ){
        try{
          const flight = await Flights.findByPk( flightId );
          return flight;
        }catch( error ){
          console.log("Something went wrong in fetching flight in repo layer", error);
          throw { error };

        }
    }

    async getAllFlights(data){
        try{
          const filtersObject =  this.#createFilter(data);
          const flights = await Flights.findAll({
            where: filtersObject
          });
          return flights;
        }catch( error ){
          console.log("Something went wrong in fetching flights in repo layer", error);
          throw { error };

        }
    }

}

module.exports = FlightsRepository;