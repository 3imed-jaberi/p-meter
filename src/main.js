const { 
  display, 
  searchResult, 
  espaceChart
} = require('./utils');


const main = (password, Opts) => {

  let displayString = Opts.displayString || false, 
  useSpace = Opts.useSpace || false;

  // number of characters in the password ...
  TailleAnalysis = password.length;
  // espaceSearch and result according to the developer choice ...
  espaceChartAnalysis = (useSpace) ? null : password.match(espaceChart);
  // set the resul in array ...
  MyAnalysisResult = searchResult(password);
  // searche all null(s) results .. 
  nullResultSearch = MyAnalysisResult.filter(unit => unit === null);
  //  result of rules validations ... 
  result = display({ displayString, nullResultSearch, espaceChartAnalysis, TailleAnalysis });


  return result;
}


module.exports = main;