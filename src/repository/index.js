// This object which we are exporting will contain all the repositories

// which we want to export to other files
module.exports = {
  CityRepository : require('./city-repository'),
  FlightsRepository: require('./flight-repository'),
  AirplaneRepository: require('./airplane-repository'),
  AirportRepository: require('./airport-repository'),
  CrudRepository: require('./crud-repository'),
}