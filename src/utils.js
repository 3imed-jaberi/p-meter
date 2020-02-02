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
const { StringOpt, IntOpt } = require('./outputOpts.json');

const display = (result) => (StringOpt [IntOpt.findIndex(value => { return value == result })]);


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


// rules-of-analyse.js
const rules = (TailleAnalysis ) => { 
  
  return (
    (TailleAnalysis > 9) 
      ? 
    { 
      firstRule : parseInt(TailleAnalysis * 0.3), 
      secondRule : parseInt(TailleAnalysis * 0.1),
      thirdRule : parseInt(TailleAnalysis * 0.1) 
    }
    :
    { 
      firstRule : parseInt(TailleAnalysis * 0.3), 
      secondRule : parseInt(TailleAnalysis * 0.2),
      thirdRule : parseInt(TailleAnalysis * 0.2)
    }
  );
};


// validation-rules.js
const validationRules = (nullResultSearch, espaceChartAnalysis, TailleAnalysis) => {
  if ((nullResultSearch.length === 4) || (espaceChartAnalysis !== null) || (TailleAnalysis > 24) || (TailleAnalysis < 8)){
    return -1;
  }else if (nullResultSearch.length === 0) {
    let myRules = rules(TailleAnalysis);
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



module.exports = { errorType, display, searchResult, espaceChart, rules, validationRules }