const resultStringValue = ['ERROR', 'FAIBLE', 'AVG', 'ABOVE AVG', 'STRONG AVG', 'FORT', 'ABOVE FORT','STRONG FORT'];
const resultIntgerValue = [-1, 0, 1, 2, 3, 4, 5, 6]; 


const display = (result) => (resultStringValue [resultIntgerValue.findIndex(value => { return value == result })]);


module.exports = display;