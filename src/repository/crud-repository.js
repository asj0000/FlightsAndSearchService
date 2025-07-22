class CrudRepository{
  
  constructor(model){
    this.model = model;
  }

  async create( data ){
    try{
      const response = await this.model.create( data );
      return response;

    }catch( error){
      console.log("Something went wrong in crud repo layer");
      throw { error };
    }

  }

  async get( modelId ){
    try{
      const response = await this.model.findByPk( modelId );
      return response;

    }catch( error){
      console.log("Something went wrong in crud repo layer");
      throw { error };
    }

  }

  async getAll(){
    try{
      const response = await this.model.findAll();
      return response;
    }catch( error){
      console.log("Something went wrong in crud repo layer");
      throw { error };
    }

  }

  async update(modelId , data){
    try{
      const response = await this.model.update( data , {
        where:{
          id: modelId
        }
      })
      return response;
    }catch( error){
      console.log("Something went wrong in crud repo layer");
      throw { error };
    }
  }

  async destory( modelId ){
     try{
      await this.model.destroy({
        where:{ id: modelId}
      })
      return true;
    }catch( error){
      console.log("Something went wrong in crud repo layer");
      throw { error };
    }

  }
}

module.exports = CrudRepository;