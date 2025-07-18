const {City} = require('../models/index');
const { Op}  = require('sequelize');

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
  // Method to create multiple cities , BulkInsert or BulkCreate
  async createCities( cities){
    try{
      const result = await City.bulkCreate(cities);
      console.log("Cities Created Successfully - ", result);
      return result;
    }catch(error){
      console.log("Error in Creating City in Bulk ");
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

  async getCity(cityId){
    try{
      const city = await City.findByPk( cityId) ;
      console.log( "City is - ", city, " CityId is - ", cityId);
      return city ;
    }catch( error ){
      console.log("Error in Getting City -- ");
      throw { error };
    }
  }

  async getAllCities( filter ){ // filter can be empty also
    try{
      if( filter.name ){
        const cities = await City.findAll({
          where:{
            name :{
              [ Op.startsWith]: filter.name
            }
          }
        })
        return cities ; 
      }
      const cities = await City.findAll() ;
      console.log( "City is - ", cities);
      return cities ;
    }catch( error ){
      console.log("Error in fetching Cities -- ");
      throw { error };
    }
  }

  async updateCity( cityId , data){
    try{
      // The below approach will not return the updated object
      // if working with PostgresSQL use return TRUE approach , else do not use
      // const cityObj = await City.update( data , {
      //   where:{
      //     id : cityId
      //   }
      // });

      // The below approach will return the updated object
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city; 

    }catch(error){
      console.log("Error in Updating City -- ");
      throw { error };
    }
  }

   
}

module.exports = CityRepostory;