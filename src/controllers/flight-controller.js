const { FlightsService } = require( '../services/index' );

const flightsService = new FlightsService();

const create =  async( req , res )=> {
  try{
    console.log("Flight data in controller - ", req.body);
    const flight = await flightsService.createFlight( req.body );
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

module.exports = {
  create,
}