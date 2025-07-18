const { Airplane } = require( '../models/index');

class AirplaneRepository{
  async getAirplane( id ){ 
    try{
      const airplane = await Airplane.findByPk( id );
      return airplane;
    }catch( error ){
      console.log( " something wrong in getting airplane in repo layer ", error );
      throw { error };
    }

  }
}

module.exports = AirplaneRepository;