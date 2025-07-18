const { Airport } = require('../models/index');
const { City } = require('../models/index');

class AirportRepository{

    // METHOD to add a new city entry in our Table
    async createAirport(data){
      try{
        const airport = await Airport.create( data);
        return airport;

      }catch(error){
        console.log("Error in Creating Airport ");
        throw{error};
      }

    };
    
    async getAirport( id){
      try{
        console.log("Airport id from in repo layer  ", id);
        const result = await Airport.findByPk(id , {
          include:{
            model: City,
            attributes: ['name']
          },
        });
        console.log("Aiprort fetched from DB ", result);
        return result;

      }catch(error){
        console.log("Error in fetching the info of all aiports", error);

      }
    };

    async updateAirport( id , data){
      try{
        const airport = await Airport.findByPk(id);
        airport.name = data.name ? data.name : airport.name;
        airport.address = data.address ? data.address :  airport.address;
        await airport.save();
        return airport; 
      }catch( error ){
        console.log("Error in updating the airport", error );
        throw{error};
      }
    }

    async deleteAirport(id){
      try{
        await Airport.destroy({
          where:{
            id: id
          }
        })
      }catch(error){
        console.log("Error in deleting the aiport", error);
        throw{error};
      }
    }

}

module.exports = AirportRepository;

