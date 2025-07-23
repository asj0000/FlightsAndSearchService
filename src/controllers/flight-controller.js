const { FlightsService } = require( '../services/index' );

const flightsService = new FlightsService();

const create =  async( req , res )=> {
  try{
    const flightBodyData = {
      flightNumber : req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price
    }
    const flight = await flightsService.createFlight( flightBodyData );
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      err: {}
    });


  }catch( error ){
    console.log(error);
    return res.status(500).json({
      data:{},
      success: false,
      message: "Something went wrong while creating a flight",
      err: error
    })
  }

}

const getAll = async( req, res )=>{
  try{
    const response = await flightsService.getAllFilghtData( req.query );
    return res.status( 200 ).json({
      data: response,
      success: true,
      message: "Successfully fetched flights",
      err: {}
    })

  }catch( error ){
    console.log(error);
    return res.status(500).json({
      data:{},
      success: false,
      message: "Something went wrong while fetching flights",
      err: error
    })

  }
   
}

module.exports = {
  create,
  getAll,
}