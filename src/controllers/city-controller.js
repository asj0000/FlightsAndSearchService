const { CityService } = require("../services/index");
const cityServiceObj = new CityService();

const create = async( req, res) =>{
    try{
        const city =  await cityServiceObj.createCity(req.body); 
        return res.status(201).json({
          data: city,
          success: true,
          message: "Successfully created a city",
          err: {}
        });
    }catch( error ){
        console.log(error);
        return res.status(500).json({
          data:{},
          success: false,
          message: "Something went wrong while creating a city",
          err: error
        })
    }

}

const destroy = async( req, res) =>{
    try{
        const response = await cityServiceObj.deleteCity(req.params.id); 
        return res.status(200).json({
          data: response,
          success: true,
          message: "Successfully deleted a city",
          err: {}
        });
    }catch( error ){
        console.log(error);
        return res.status(500).json({
          data:{},
          success: false,
          message: "Not able to delete a city",
          err: error
        })
    }

}

const get = async( req, res) =>{
    try{
        const response = await cityServiceObj.getCity(req.params.id);
        console.log('Response from get city service: ', response);
        return res.status(200).json({
          data: response,
          success: true,
          message: "Successfully fetched a city",
          err: {}
        });
    }catch( error ){
        console.log(error);
        return res.status(500).json({
          data:{},
          success: false,
          message: "Not able to get the city",
          err: error
        })

    }

}

const update = async( req, res) =>{
    try{
        const response = await cityServiceObj.updateCity(req.params.id, req.body);
        return res.status(200).json({
          data: response,
          success: true,
          message: "Successfully updated a city",
          err: {}
        });


    }catch( error ){
        console.log(error);
        return res.status(500).json({
          data:{},
          success: false,
          message: "Not able to update the city",
          err: error
        })
    }

}
 const getAll = async(req, res)=>{
    try{
      const allCities = await cityServiceObj.getAllCities( req.query);
      return res.status(200).json({
          data: allCities,
          success: true,
          message: "Successfully updated a city",
          err: {}
      });
    }catch(error){
        console.log(error);
        return res.status(500).json({
          data:{},
          success: false,
          message: "Not able to fetch the city",
          err: error
        })
    }
 }

module.exports = {
  create,
  destroy,
  get,
  getAll,
  update
}