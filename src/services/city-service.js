const { CityRepository } = require('../repository/index');

class CityService {
  constructor(){
    this.cityRepository = new CityRepository();
  }

  async createCity(data){
    try {
      const city = await this.cityRepository.createCity( data );
      return city;
    } catch (error) {
      console.log("Error in Creating City Service Layer -- ", error);
      throw { error };
    }
  }

  async updateCity(cityId ,  data){
    try{
      const cityObj = await this.cityRepository.updateCity( cityId , data );
      return cityObj;
    }catch(error){
      console.log("Error in Updating City Service laye -- ", error);
      throw { error };
    }
  }

  async deleteCity(cityId){
    try{
      await this.cityRepository.deleteCity(cityId);
    }catch(error){
      console.log("Error in Deleting City Service Layer -- ", error);
      throw { error };
    }
  }

  async getCity(cityId){
    try {
      const city = await this.cityRepository.getCity( cityId );
      console.log("City fetched from Repo Layer -- ", city);
      return city;
    } catch (error) {
      console.log("Error in getting City Service Layer -- ", error);
      throw { error };
    }
  }
  async getAllCities( filter){
    try {
      const cities = await this.cityRepository.getAllCities({ name : filter.name});
      console.log("All Cities  -- ", cities);
      return cities;
    } catch (error) {
      console.log("Error in getting City Service Layer -- ", error);
      throw { error };
    }
  }
}

module.exports = CityService;