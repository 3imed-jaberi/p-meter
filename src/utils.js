// type of error file ..  
const errorType = (displayOpts) => {
  let { nullResultSearch, espaceChartAnalysis, TailleAnalysis } = displayOpts;

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
const { StringOpt, IntOpt } = require('./outputOpts.json');

const display = (displayOpts) => {
  let intResult = validationRules(displayOpts);
  let stringResult = StringOpt[IntOpt.findIndex(value => value === intResult)];
  return displayOpts.displayString ? `${stringResult}${errorType(displayOpts)}` : intResult;
}


// analyse-password.js 
const {
  lowerCaseLetters,
  upperCaseLetters,
  number,
  specialChart,
  espaceChart
} = require('./constant');

// __ Private Use __ //
const searchResult = (password) => ([
  lowerCaseAnalysis = password.match(lowerCaseLetters),
  upperCaseAnalysis = password.match(upperCaseLetters),
  numberAnalysis = password.match(number),
  specialChartAnalysis = password.match(specialChart)
]);


// get the rules collection ..
const getRules = (TailleAnalysis ) => { 

  const getRulesForShortPassword = () => ({
    firstRule : parseInt(TailleAnalysis * 0.3), 
    secondRule : parseInt(TailleAnalysis * 0.1),
    thirdRule : parseInt(TailleAnalysis * 0.1) 
  });

  const getRulesForLongPassword = () => ({
    firstRule : parseInt(TailleAnalysis * 0.3), 
    secondRule : parseInt(TailleAnalysis * 0.2),
    thirdRule : parseInt(TailleAnalysis * 0.2)
  });

  return TailleAnalysis > 9 ? getRulesForShortPassword() : getRulesForLongPassword();
};


// validation-rules.js
const validationRules = (displayOpts) => {

  let { nullResultSearch, espaceChartAnalysis, TailleAnalysis } = displayOpts;

  if ((nullResultSearch.length === 4) || (espaceChartAnalysis !== null) || (TailleAnalysis > 24) || (TailleAnalysis < 8)){
    return -1;
  }else if (nullResultSearch.length === 0) {
    let myRules = getRules(TailleAnalysis);
    // Fort mais Trés fort ou non ! 
    if (lowerCaseAnalysis.length >= myRules.firstRule) {
      if (upperCaseAnalysis.length >=  myRules.secondRule) {
        if ( specialChartAnalysis.length >=  myRules.thirdRule ) {
          return 6;
        }
      }
    }else {
      return  5;
    }
  }else if (nullResultSearch.length === 1) {
    if (specialChartAnalysis === null) {
      return 3;
    }else {
      return 4;
    }
  }else if (nullResultSearch.length === 2){
    if (specialChartAnalysis === null) {
      return 1;
    }else {            
      return 2;
    }
  }else{
    return 0;
  };
};



module.exports = { errorType, display, searchResult, espaceChart, getRules, validationRules }