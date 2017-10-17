'use strict'


//jshit expr: true

var chai =require('chai'),
expect=chai.expect;

chai.should();

function isEven(num){


    return num% 2===0;

}


describe ('unit testing' , function(){

it  ('should return when number is even', function(){


    isEven(4).should.be.true;
})
 it ('should return when number is odd', function(){

    expect(isEven(5)).to.be.false;
 })

})