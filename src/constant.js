// RegExp Pattern ..
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const number = /[0-9]/g ;
const specialChart = /\W/g;
const espaceChart =  /\s/g;


// Rules .. 


module.exports = {
  lowerCaseLetters,
  upperCaseLetters,
  number,
  specialChart,
  espaceChart
}