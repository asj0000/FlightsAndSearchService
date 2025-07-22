const { FlightsRepository, AirplaneRepository} = require('../repository/index');
const { compareTime} = require( '../utils/helper');
class FlightsService{
  constructor(){
    this.airplaneRepostiory = new AirplaneRepository();
    this.flightRepostiory = new FlightsRepository();
  }
  
  async createFlight( data ){
    try{
        if( !compareTime( data.arrivalTime , data.departureTime ) ){
          throw{ error: "Arrival time should be greater than departure time"};
        }
        const airplane = await this.airplaneRepostiory.getAirplane( data.airplaneId);
        const flight = await this.flightRepostiory.createFlight({
          ...data, totalSeats: airplane.capacity
        });
        return flight;

    }catch( error ){
        console.log(" Something wrong in flights service layer");
        throw { error};
    }

  } 

  async getAllFilghtData( data ){
    try{
        const flights = await this.flightRepostiory.getAllFlights(data);
        return flights;

    }catch( error ){
        console.log(" Something wrong in flights service layer");
        throw { error};
    }

  }
}

module.exports =  FlightsService; 

/**
 *  data that should come from controller as data
 *  1. flightNumber
 *  2. airplaneId
 *  3. departureAirportId
 *  4. arrivalAirportId
 * 5. departureTime
 * 6. arrivalTime
 * 7. price
 *  8. totalSeats -> this we will get from airplane table 
 */