const { AirportService } = require("../services/index");
const airportServiceObj = new AirportService();


const create = async( req, res) =>{
    try{
        const data = {
          name :  req.body.name,
          cityId: req.body.cityId
        };
        console.log("Data to be created in airport table ", data);
        const airport =  await airportServiceObj.createAirport(data); 
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
          message: "Something went wrong while creating an airport",
          err: error
        })
    }

}


const get = async( req, res) =>{
    try{
        console.log("Airport id from req object ", req.params.id);
        const response = await airportServiceObj.getAirport(req.params.id);
        console.log('Response from get aiprort service: ', response);
        return res.status(200).json({
          data: response,
          success: true,
          message: "Successfully fetched airport",
          err: {}
        });
    }catch( error ){
        console.log(error);
        return res.status(500).json({
          data:{},
          success: false,
          message: "Not able to get the aiport",
          err: error
        })

    }

}

const update = async( req, res) =>{
    try{
        const response = await airportServiceObj.updateAirport(req.params.id, req.body);
        return res.status(200).json({
          data: response,
          success: true,
          message: "Successfully updated an airport ",
          err: {}
        });


    }catch( error ){
        console.log(error);
        return res.status(500).json({
          data:{},
          success: false,
          message: "Not able to update the airport",
          err: error
        })
    }

}


const destroy  = async( req , res )=>{
  try{
    const response = await airportServiceObj.deleteAirport( req.params.id);
    return res.status(200).json({
      data:response,
      success: true,
      message: "Successfully deleted the airport",
      err: {}
    });

  }catch( error){
    console.log(error);
    return res.status(500).json({
      data:{},
      success: false,
      message: "Not able to delete airport",
      err: error
    })

  }
}

module.exports = {
  create,
  update,
  get,
  destroy
}
