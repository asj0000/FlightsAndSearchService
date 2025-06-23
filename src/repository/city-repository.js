const {City} = require('../models/index');

class CityRepostory {

  // METHOD to add a new city entry in our Table
  async createCity( { name }){
    try{
      const city = await City.create( { name});
      return city;

    }catch(error){
      throw { error };
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
      throw { error };
    }

  }
}

module.exports = CityRepostory;