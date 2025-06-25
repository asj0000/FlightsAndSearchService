const {City} = require('../models/index');

class CityRepostory {

  // METHOD to add a new city entry in our Table
  async createCity( { name }){
    try{
      const city = await City.create( {name});
      return city;

    }catch(error){
      console.log("Error in Creating City ");
      throw{error};
    }

  }

  // METHOD to delete a city form the table
  async deleteCity( cityId ){
    try{
      await City.destroy({
        where:{
          id: cityId
        }
      });

    }catch( error ){
      console.log("Error in Deleting City -- ");
      throw { error };
    }

  }

  async getCity({cityId }){
    try{
      const city = await City.findByPk( cityId) ;
      console.log( "City is - ", city);
    }catch( error ){
      console.log("Error in Getting City -- ");
      throw { error };
    }
  }

  async updateCity( cityId , data){
    try{
      const cityObj = await City.update( data , {
        where:{
          id : cityId
        }
      });

      console.log( "Updated Onject  --", cityObj);
      return cityObj ; 
    }catch(error){
      console.log("Error in Updating City -- ");
      throw { error };
    }
  }

   
}

module.exports = CityRepostory;