const rules = (TailleAnalysis ) => {
  let rules = new Object() ;
  if ( TailleAnalysis > 9 ) {
        rules = { 
                  firstRule : parseInt( TailleAnalysis * 0.3 ) , 
                  secondRule : parseInt( TailleAnalysis * 0.1 ) ,
                  thirdRule : parseInt( TailleAnalysis * 0.1) 
        };
  }else{
        rules = { 
                  firstRule : parseInt( TailleAnalysis * 0.3 ) , 
                  secondRule : parseInt( TailleAnalysis * 0.2 ) ,
                  thirdRule : parseInt( TailleAnalysis * 0.2)
                };
  };

        return rules ;
};


module.exports = rules ;
