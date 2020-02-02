
// show result ..
const { StringOpt, IntOpt } = require('./outputOpts.json');




// analyse-password.js 
const {
  lowerCaseLetters,
  upperCaseLetters,
  number,
  specialChart,
  espaceChart
} = require('./constant');

// ___ Private Use ___ //
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


// check the rules .. 
const checkRules = (displayOpts) => {

  let { nullResultSearch, espaceChartAnalysis, TailleAnalysis } = displayOpts;

  // 8 --> 24 support .. || espaceChartAnalysis: just for fix useSpace .. 
  if(TailleAnalysis > 24 || TailleAnalysis < 8 || espaceChartAnalysis !== null){
    return -1;
  }
  
  switch (nullResultSearch.length) {
    case 0: {
      let { firstRule, secondRule, thirdRule } = getRules(TailleAnalysis);
      // Fort mais Trés fort ou non ! 
      return (
        lowerCaseAnalysis.length >= firstRule
        ?
        (
          upperCaseAnalysis.length >=  secondRule 
          ?
          (specialChartAnalysis.length >=  thirdRule ? 6 : null) 
          : 
          null 
        )
        :
        5
      );
    }
    case 1: {
      return specialChartAnalysis === null ? 3 : 4;
    }
    case 2: {
      return specialChartAnalysis === null ? 1 : 2;
    }
    case 4: {
      return -1;
    }
    default: {
      return 0;
    }
  }
};


// ___ Public Funcs ___ //
const display = (displayOpts) => {
  let intResult = checkRules(displayOpts);
  let stringResult = StringOpt[IntOpt.findIndex(value => value === intResult)];
  return displayOpts.displayString ? `${stringResult}${errorType(displayOpts)}` : intResult;
}

module.exports = { errorType, display, searchResult, espaceChart, getRules, checkRules }