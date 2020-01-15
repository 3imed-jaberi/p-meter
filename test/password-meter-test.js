require('mocha');
const assert = require('assert');
const package = require('../index'); 



let result;


describe('password meter test - error', () => {

  it ('Condition 1', () => {
    result = package ('123456', { displayString : false, useSpace : false }); 
    assert.equal(result,-1);
  });

  it ('Condition 2', () => {
    result = package ('', { displayString : false, useSpace : false }); 
    assert.equal(result,-1);
   });

  it ('Condition 3', () => {
    result = package ('12345678 ', { displayString : false, useSpace : false }); 
    assert.equal(result,-1);
  });

  it ('Condition 4', () => {
    result = package (' ', { displayString : false, useSpace : false }); 
    assert.equal(result,-1);
  });

  it ('Condition 5', () => {
    result = package ('   ', { displayString : false, useSpace : true }); 
    assert.equal(result,-1);
  });

  it ('Condition 6', () => {
    result = package ('12345678910111112424242525', { displayString : false, useSpace : true }); 
    assert.equal(result,-1);
  });

  it ('Condition 7', () => {
    result = package ('123456', { displayString : true , useSpace : false }); 
    assert.equal(result.substr(0,5),'ERROR');
  });

  it ('Condition 8', () => {
    result = package ('', { displayString : true , useSpace : false }); 
    assert.equal(result.substr(0,5),'ERROR');
  });

  it ('Condition 9', () => {
    result = package ('12345678 ', { displayString : true , useSpace : false }); 
    assert.equal(result.substr(0,5),'ERROR');
  });

  it ('Condition 10', () => {
    result = package (' ', { displayString : true , useSpace : false }); 
    assert.equal(result.substr(0,5),'ERROR');
  });

  it ('Condition 11', () => {
    result = package ('   ', { displayString : true , useSpace : true }); 
    assert.equal(result.substr(0,5),'ERROR');
  });

  it ('Condition 12', () => {
    result = package ('12345678910111112424242525', { displayString : true , useSpace : true }); 
    assert.equal(result.substr(0,5),'ERROR');
  });

});


console.log
(`
          *************************
          *  WELCOME TO THE TEST  * 
          *************************
          \n 
 !! => SPACE is special chart  .. 

`);


describe('password meter test - faible', () => {

  it ('Condition 1', () => {
    result = package ('12345678', { displayString : false, useSpace : false }); 
    assert.equal(result,0);
  });
     
  it ('Condition 2', () => {
    result = package ('imedjaberi', { displayString : false, useSpace : false }); 
    assert.equal(result,0);
  });
     
  it ('Condition 3', () => {
    result = package ('IMEDJABERI', { displayString : false, useSpace : false }); 
    assert.equal(result,0);
  });
     
  it ('Condition 4', () => {
    result = package ('+°%/*-+-', { displayString : false, useSpace : false }); 
    assert.equal(result,0);
  });
     
  it ('Condition 5', () => {
    result = package ('+°%/ * +-', { displayString : false, useSpace : true }); 
    assert.equal(result,0);
  });

  it ('Condition 6', () => {
    result = package ('12345678', { displayString : true , useSpace : false }); 
    assert.equal(result,'FAIBLE');
  });
          
  it ('Condition 7', () => {
    result = package ('imedjaberi', { displayString : true , useSpace : false }); 
    assert.equal(result,'FAIBLE');
  });
          
  it ('Condition 8', () => {
    result = package ('IMEDJABERI', { displayString : true , useSpace : false }); 
    assert.equal(result,'FAIBLE');
  });
          
  it ('Condition 9', () => {
    result = package ('+°%/*-+-', { displayString : true , useSpace : false }); 
    assert.equal(result,'FAIBLE');
  });
          
  it ('Condition 10', () => {
    result = package ('+°%/ * +-', { displayString : true , useSpace : true }); 
    assert.equal(result,'FAIBLE');
  });

});


describe('password meter test - AVG' , () => {

  it ('Condition 1', () => {
    result = package ('123456im', { displayString : false, useSpace : false }); 
    assert.equal(result,1);
  });
     
  it ('Condition 2', () => {
    result = package ('123IM456', { displayString : false, useSpace : false }); 
    assert.equal(result,1);
  });
     
  it ('Condition 3', () => {
    result = package ('imedJABERI', { displayString : false, useSpace : false }); 
    assert.equal(result,1);
  });

  it ('Condition 4', () => {
    result = package ('123456im', { displayString : true , useSpace : false }); 
    assert.equal(result,'AVG');
  });
          
  it ('Condition 5', () => {
    result = package ('123IM456', { displayString : true , useSpace : false }); 
    assert.equal(result,'AVG');
  });
          
  it ('Condition 6', () => {
    result = package ('imedJABERI', { displayString : true , useSpace : false }); 
    assert.equal(result,'AVG');
  });

});


describe('password meter test - ABOVE AVG' , () => {

  it ('Condition 1', () => {
    result = package ('123456*+', { displayString : false, useSpace : false }); 
    assert.equal(result,2);
  });
     
  it ('Condition 2', () => {
    result = package ('IMED CSM', { displayString : false, useSpace : true }); 
    assert.equal(result,2);
  });
     
  it ('Condition 3', () => {
    result = package ('i+love+my+mom', { displayString : false, useSpace : false }); 
    assert.equal(result,2);
  });

  it ('Condition 4', () => {
    result = package ('123456*+', { displayString : true , useSpace : false }); 
    assert.equal(result,'ABOVE AVG');
  });
          
  it ('Condition 5', () => {
    result = package ('IMED CSM', { displayString : true , useSpace : true }); 
    assert.equal(result,'ABOVE AVG');
  });
          
  it ('Condition 6', () => {
    result = package ('i+love+my+mom', { displayString : true , useSpace : false }); 
    assert.equal(result,'ABOVE AVG');
  });

});


describe('password meter test - STRONG AVG' , () => {

  it ('Condition 1', () => {
    result = package ('123S56im', { displayString : false, useSpace : false }); 
    assert.equal(result,3);
  });

  it ('Condition 2', () => {
    result = package ('123S56im', { displayString : true , useSpace : false }); 
    assert.equal(result,'STRONG AVG');
  });

});


describe('password meter test - FORT' , () => {

  it ('Condition 1', () => {
    result = package ('123+56im', { displayString : false, useSpace : false }); 
    assert.equal(result,4);
  });

  it ('Condition 2', () => {
    result = package ('123S56+M', { displayString : false, useSpace : false }); 
    assert.equal(result,4);
  });

  it ('Condition 3', () => {
    result = package ('imed+csM', { displayString : false, useSpace : false }); 
    assert.equal(result,4);
  });
     
  it ('Condition 4', () => {
    result = package ('123+56im', { displayString : true , useSpace : false }); 
    assert.equal(result,'FORT');
  });
     
  it ('Condition 5', () => {
    result = package ('123S56+M', { displayString : true , useSpace : false }); 
    assert.equal(result,'FORT');
  });
     
  it ('Condition 6', () => {
    result = package ('imed+csM', { displayString : true , useSpace : false }); 
    assert.equal(result,'FORT');
  });

});


describe('password meter test - ABOVE FORT' , () => {

  it ('Condition 1', () => {
    result = package ('123+5S6m', { displayString : false, useSpace : false }); 
    assert.equal(result,5);
  });

  it ('Condition 2', () => {
    result = package ('123+5S6m', { displayString : true , useSpace : false }); 
    assert.equal(result,'ABOVE FORT');
  });

});


describe('password meter test - STRONG FORT' , () => {

  it ('Condition 1', () => {
    result = package ('123+5S6im', { displayString : false, useSpace : false }); 
    assert.equal(result,6);
  });

  it ('Condition 2', () => {
    result = package ('123+5S6im', { displayString : true , useSpace : false }); 
    assert.equal(result,'STRONG FORT');
  });

});