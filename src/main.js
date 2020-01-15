const { searchResult , espaceChart } = require('./analyse-password');
const validationRules = require('./validation-rules');
const display = require ('./show-result');
const errorType = require('./type-of-error');



const main = (password,  { displayString, useSpace } ) => {

  // number of characters in the password ...
  TailleAnalysis = password.length;
  // espaceSearch and result according to the developer choice ...
  espaceChartAnalysis = (useSpace) ? null : password.match(espaceChart);
  // set the resul in array ...
  MyAnalysisResult = searchResult(password);
  // searche all null(s) results .. 
  nullResultSearch = MyAnalysisResult.filter(unit => unit === null);
  //  result of rules validations ... 
  result = validationRules(nullResultSearch, espaceChartAnalysis, TailleAnalysis);


  return (displayString ? `${display(result)}${errorType(nullResultSearch, espaceChartAnalysis, TailleAnalysis)}` : result);
}


module.exports = main;