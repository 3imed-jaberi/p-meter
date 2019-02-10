const rules = require('./rules-of-analyse');

validationRules = (nullResultSearch , espaceChartAnalysis , TailleAnalysis ) => {
    if ((nullResultSearch.length === 4 ) || ( espaceChartAnalysis !== null ) || (TailleAnalysis > 24) || (TailleAnalysis < 8)){
        return -1 ;
    }else if ( nullResultSearch.length === 0 ) {
        let myRules = rules(TailleAnalysis);
        // Fort mais Trés fort ou non ! 
        if ( lowerCaseAnalysis.length >= myRules.firstRule ) {
            if ( upperCaseAnalysis.length >=  myRules.secondRule ) {
                    if ( specialChartAnalysis.length >=  myRules.thirdRule ) {
                       return 6 ;
                    }
            }
        }else {
           return  5 ;
        }
    }else if (nullResultSearch.length === 1 ) {
        if ( specialChartAnalysis === null ) {
            return 3
        }else {
            return 4 ;
        }
    }else if (nullResultSearch.length === 2 ){
        if ( specialChartAnalysis === null ) {
            return 1

        }else {            
            return 2 ;
        }
    }else{
        return 0 ;
    };
};

module.exports = validationRules ;