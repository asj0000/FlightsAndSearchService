const {AirportService} = require('../services/index');
const airportServiceObj = new AirportService();

const create = async( req , res )=>{
    try{
        console.log( "Data in controller layer ", req.body);
        const airport =  await airportServiceObj.create(req.body); 
        return res.status(201).json({
          data: airport,
          success: true,
          message: "Successfully created an airport",
          err: {}
        });

    }catch( error ){
        console.log(error);
        return res.status(500).json({
          data:{},
          success: false,
          message: "Something went wrong while creating a airport",
          err: error
        })
    }
}


module.exports = {
  create,

};