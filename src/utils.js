// type of error file ..  
const errorType = (nullResultSearch , espaceChartAnalysis , TailleAnalysis ) => {
  if (nullResultSearch.length === 4) {
    return ' : empty password';
  }else if (espaceChartAnalysis !== null) {
    return ' : useSpace is not active';
  }else if ((8 > TailleAnalysis) || (TailleAnalysis > 24)) {
    return ' : validate the length of password';
  }else {
    return ''; 
  };
}

// show result ..
const resultStringValue = ['ERROR', 'FAIBLE', 'AVG', 'ABOVE AVG', 'STRONG AVG', 'FORT', 'ABOVE FORT','STRONG FORT'];
const resultIntgerValue = [-1, 0, 1, 2, 3, 4, 5, 6]; 


const display = (result) => (resultStringValue [resultIntgerValue.findIndex(value => { return value == result })]);

// analyse-password.js 
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


module.exports = { errorType, display, searchResult, espaceChart }