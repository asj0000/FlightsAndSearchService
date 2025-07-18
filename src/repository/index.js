// This object which we are exporting will contain all the repositories


// which we want to export to other files
module.exports = {
  CityRepository : require('./city-repository'),
  AirportRepository: require('./airport-repository'),
  FlightsRepository: require('./flight-repository'),
  AirplaneRepository: require('./airplane-repository')
}