const { StringOpt, IntOpt } = require('./outputOpts.json');

// ___ Constants ___ // 
// RegExp Pattern .. //
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g ;
const specialChars = /\W/g;
const espaceChars =  /\s/g;


// ___ Private Use ___ //

// espaceSearch and result according to the developer choice ...
const espaceCharAnalysisFunc = (password, useSpace) => useSpace ? null : password.match(espaceChars);

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

  
  let { password, useSpace } = displayOpts,
  // number of characters in the password ...
  TailleAnalysis = password.length, 
  // set the resul in array ...
  MyAnalysisResult = searchResult(password),
  // searche all null(s) results .. 
  nullResultSearch = MyAnalysisResult.filter(unit => unit === null),

  espaceCharAnalysis = espaceCharAnalysisFunc(password, useSpace);

  // 8 --> 24 support .. || espaceCharAnalysis: just for fix useSpace .. 
  if(TailleAnalysis > 24 || TailleAnalysis < 8 || espaceCharAnalysis !== null){
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
          (specialCharAnalysis.length >=  thirdRule ? 6 : null) 
          : 
          null 
        )
        :
        5
      );
    }
    case 1: {
      return specialCharAnalysis === null ? 3 : 4;
    }
    case 2: {
      return specialCharAnalysis === null ? 1 : 2;
    }
    case 4: {
      return -1;
    }
    default: {
      return 0;
    }
  }
};


// find all patterns inside the password .. 
const searchResult = password => ([
  lowerCaseAnalysis = password.match(lowerCaseLetters),
  upperCaseAnalysis = password.match(upperCaseLetters),
  numberAnalysis = password.match(numbers),
  specialCharAnalysis = password.match(specialChars)
]);


// ___ Public Funcs ___ //

const pMeter = (password, pOpts) => {
  let Opts = pOpts || {},
  displayString = Opts.displayString || false, 
  useSpace = Opts.useSpace || false,
  intResult = checkRules({ password, useSpace }),
  stringResult = StringOpt[IntOpt.findIndex(value => value === intResult)];

  return displayString ? stringResult : intResult;
}



module.exports = pMeter;



// error types >>> note.txt .. 
// checkRules -- simple way >>> note.txt
