const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const number = /[0-9]/g ;
const specialChart = /\W/g;
const espaceChart =  /\s/g;


const searchResult = (password) => ([
  lowerCaseAnalysis = password.match(lowerCaseLetters),
  upperCaseAnalysis = password.match(upperCaseLetters),
  numberAnalysis = password.match(number),
  specialChartAnalysis = password.match(specialChart)
]);


module.exports = { searchResult , espaceChart };