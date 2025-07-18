const { AirportRepository } = require('../repository/index');
class AirportService{
  constructor(){
    this.airportRepositoryObj = new AirportRepository();
  }

  async createAirport(data){
    try {
      const airport = await this.airportRepositoryObj.createAirport( data );
      return airport;
    } catch (error) {
      console.log("Error in Creating airport Service Layer -- ", error);
      throw { error };
    }
  }

  async getAirport( id ){
    try{
      console.log("Airport id from in service layer  ", id);
      const airport = await this.airportRepositoryObj.getAirport(id);
      console.log("Airport fetched from Service Layer -- ", airport);
      return airport;
    }catch(error){
      console.log("Error in getting Aiport Service LAyer", error);
      throw { error };
    }
  }


  async updateAirport(id ,  data){
    try{
      const airportObj = await this.airportRepositoryObj.updateAirport( id , data );
      return airportObj;
    }catch(error){
      console.log("Error in Updating Airport Service layer -- ", error);
      throw { error };
    }
  }

  async deleteAirport( id ){
    try{
      await this.airportRepositoryObj.deleteAirport( id );
    }catch(error){
      console.log("Error in deleting Airport in Service LAyer", error);
      throw { error };
    }
  }

}

module.exports = AirportService;