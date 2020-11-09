// ___ Constants ___ //
// Output Options
const STRING_OPTS = [
  'ERROR', 'FAIBLE', 'AVG', 'ABOVE AVG',
  'STRONG AVG', 'FORT', 'ABOVE FORT', 'STRONG FORT'
]
const INPUT_OPTS = [-1, 0, 1, 2, 3, 4, 5, 6]

// RegExp Pattern
const lowerCaseLetters = /[a-z]/g
const upperCaseLetters = /[A-Z]/g
const numbers = /[0-9]/g
const specialChars = /\W/g
const espaceChars = /\s/g

// ___ Private Use ___ //
// EspaceSearch and result according to the developer choice ...
const espaceCharAnalysisFunc = (password, useSpace) =>
  useSpace ? null : password.match(espaceChars)

// Get the rules collection ..
const getRules = TailleAnalysis => {
  // getRulesForShortPassword : 0.1
  // getRulesForLongPassword : 0.2
  const eps = TailleAnalysis > 9 ? 0.1 : 0.2

  return {
    firstRule: parseInt(TailleAnalysis * 0.3),
    secondRule: parseInt(TailleAnalysis * eps),
    thirdRule: parseInt(TailleAnalysis * eps)
  }
}

// check the rules ..
const checkRules = displayOpts => {
  const { password, useSpace } = displayOpts
  // number of characters in the password ...
  const TailleAnalysis = password.length
  // set the resul in array ...
  const MyAnalysisResult = searchResult(password)
  // searche all null(s) results ..
  const nullResultSearch = MyAnalysisResult.filter(unit => unit === null)

  const espaceCharAnalysis = espaceCharAnalysisFunc(password, useSpace)

  // 8 --> 24 support .. || espaceCharAnalysis: just for fix useSpace ..
  if (
    TailleAnalysis > 24 ||
    TailleAnalysis < 8 ||
    espaceCharAnalysis !== null
  ) return -1

  switch (nullResultSearch.length) {
    case 0: {
      const { firstRule, secondRule, thirdRule } = getRules(TailleAnalysis)
      // Fort mais Trés fort ou non !
      return (
        lowerCaseAnalysis.length >= firstRule
          ? upperCaseAnalysis.length >= secondRule
              ? (specialCharAnalysis.length >= thirdRule ? 6 : null)
              : null
          : 5
      )
    }
    case 1: {
      return specialCharAnalysis === null ? 3 : 4
    }
    case 2: {
      return specialCharAnalysis === null ? 1 : 2
    }
    case 4: {
      return -1
    }
    default: {
      return 0
    }
  }
}

// find all patterns inside the password
// eslint-disable-next-line no-return-assign
const searchResult = password => [
  lowerCaseAnalysis = password.match(lowerCaseLetters),
  upperCaseAnalysis = password.match(upperCaseLetters),
  numberAnalysis = password.match(numbers),
  specialCharAnalysis = password.match(specialChars)
]

// ___ Public Funcs ___ //
const pMeter = (password, opts = {}) => {
  const numberResult = checkRules({ password, useSpace: (opts.useSpace || false) })
  const stringResult = STRING_OPTS[INPUT_OPTS.findIndex(value => value === numberResult)]

  return (opts.displayString || false) ? stringResult : numberResult
}

module.exports = pMeter

// TODO
// ESLINT
// USE NYC OVER ISTANBUL
// ERROR TYPES --code
// CHECK RULES --code
// MAKE TEST CODE OUTSIDE THE TEST DIR
// TRAVIS CI PIPELINE
// REVIEW README.md FILE
// ***** LAST RELEASE ******

// SOME CODE *****
// error types
// if (nullResultSearch.length === 4) {
//   return ' : empty password'
// }else if (espaceCharAnalysis !== null) {
//   return ' : useSpace is not active'
// }else if ((8 > TailleAnalysis) || (TailleAnalysis > 24)) {
//   return ' : validate the length of password'
// }else {
//   return ''
// }

// checkRules -- simple way
// const validationRules = (displayOpts) => {

//   let { nullResultSearch, espaceChartAnalysis, TailleAnalysis } = displayOpts

//   if ((nullResultSearch.length === 4) || (espaceChartAnalysis !== null) || (TailleAnalysis > 24) || (TailleAnalysis < 8)){
//     return -1
//   }else if (nullResultSearch.length === 0) {
//     let myRules = rules(TailleAnalysis)
//     let myRules = getRules(TailleAnalysis)
//     // Fort mais Trés fort ou non !
//     if (lowerCaseAnalysis.length >= myRules.firstRule) {
//       if (upperCaseAnalysis.length >=  myRules.secondRule) {
//         if ( specialChartAnalysis.length >=  myRules.thirdRule ) {
//           return 6
//         }
//       }
//     }else {
//       return  5
//     }
//   }else if (nullResultSearch.length === 1) {
//     if (specialChartAnalysis === null) {
//       return 3
//     }else {
//       return 4
//     }
//   }else if (nullResultSearch.length === 2){
//     if (specialChartAnalysis === null) {
//       return 1
//     }else {
//       return 2
//     }
//   }else{
//     return 0
//   }
// }
