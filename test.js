'use strict'


//jshit expr: true


describe ('No of tests', function(){


var chai =require('chai'),
expect=chai.expect;
var request=require('request');

chai.should();

function isEven(num){


    return num% 2===0;

}


describe ('unit testing' , function(){

it  ('should return when num  is even', function(){


    isEven(4).should.be.true;
})
 it ('should return when number is odd', function(){

    expect(isEven(5)).to.be.false;
 })

});

function add (num1, num2){
    
        return num1+num2; 
    }
    describe ('add without setup/ teardown', function(){
    
    
        var num=5;
    
        it('should be ten when adding 5 to 5 ', function(){
    
            num = add (num,5);
            num.should.equal(10);
        })

        it('Main page content', function(done) {
            request('http://localhost:8080' , function(error, response, body) {
                expect(body).to.equal('Hello World');
                done();
            });
        });
    
        it.skip('should be 12 when adding 7 to 5 ', function(){
            
                    add(num ,7).should.equal(12);
                })
    });
    
    });



