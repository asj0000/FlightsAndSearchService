function compareTime( timeString1 , timeString2 ){
  // timeString1 is arrival time 
  // timeString2 is departure time
  let dateTime1 = new Date( timeString1);
  let dateTime2 = new Date( timeString2);

  return dateTime1.getTime() > dateTime2.getTime();
}
module.exports = {
  compareTime,
}