// output options --const
const STRING_OPTS = [
  'ERROR', 'FAIBLE', 'AVG', 'ABOVE AVG',
  'STRONG AVG', 'FORT', 'ABOVE FORT', 'STRONG FORT'
]
const INPUT_OPTS = [-1, 0, 1, 2, 3, 4, 5, 6]

// reg-exp pattern
const lowerCaseLetters = /[a-z]/g
const upperCaseLetters = /[A-Z]/g
const numbers = /[0-9]/g
const specialChars = /\W/g
const espaceChars = /\s/g

// ___ private funcs ___ //
// espace-search and result according to the developer choice
const espaceCharAnalysisFunc = (password, useSpace) =>
  useSpace ? null : password.match(espaceChars)

// get the rules collection
const getRules = tailleAnalysis => {
  // getRulesForShortPassword : 0.1
  // getRulesForLongPassword : 0.2
  const eps = tailleAnalysis > 9 ? 0.1 : 0.2

  return {
    firstRule: parseInt(tailleAnalysis * 0.3),
    secondRule: parseInt(tailleAnalysis * eps),
    thirdRule: parseInt(tailleAnalysis * eps)
  }
}

// check the rules
const checkRules = displayOpts => {
  const { password, useSpace } = displayOpts
  // number of characters in the password
  const tailleAnalysis = password.length
  // set the resul in array
  const myAnalysisResult = searchResult(password)
  // searche all null(s) results
  const nullResultSearch = myAnalysisResult.filter(unit => unit === null)

  const espaceCharAnalysis = espaceCharAnalysisFunc(password, useSpace)

  // 8 --> 24 support .. || espaceCharAnalysis: just for fix useSpace
  if (
    tailleAnalysis > 24 ||
    tailleAnalysis < 8 ||
    espaceCharAnalysis !== null
  ) return -1

  switch (nullResultSearch.length) {
    case 0: {
      const { firstRule, secondRule, thirdRule } = getRules(tailleAnalysis)
      // check if high fort or not
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

// ___ public funcs ___ //
const pMeter = (password, opts = {}) => {
  const numberResult = checkRules({
    password,
    useSpace: (opts.useSpace || false)
  })
  const stringResult = STRING_OPTS[
    INPUT_OPTS.findIndex(value => value === numberResult)
  ]

  return (opts.displayString || false) ? stringResult : numberResult
}

module.exports = pMeter
