//arrow function
const data=(height,weight)=>{
    BMI=height/weight;
    console.log(BMI);
}
data(161.1,50);

const area=(length,breadth)=>length*breadth;

const age=valu=>CSSMathValue;

//nested function
function outer(){
    console.log("outer");
    function inner(){
        console.log("inner");
    }
    outer();
}
//function scope 
function calculation(){
    let invest=10000;
    let profit=2000;
    const percentage=(invest-profit)/100;
    console.log(percentage);
}
calculation();

//outside fn scope
let invest=10000;
let profit=2000;
function calculation(){
    const percentage=(invest-profit)/100;
    console.log("value",percentage);
}
calculation();

//closure function-inner fn access outer fn bt outer fn cannot access inner
function outerfield(value){
    function innerfield(value2){
        return value+value2;
    }
    return innerfield;
}
const returnvalue=outerfield(10);
returnvalue
returnvalue(2)


//callback function-fn as parameter
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
function callMe() {
    console.log('I am callback function');
}

greet('Peter', callMe);

//higher order function
//takes one or more function as argument
//it may return a function
function capture(camera){
    camera();
}
capture(function(){
    console.log("picture has been captured");
})
function video(){
    return function(){
        console.log("returning video");
    }
}
const video=returnvideo();
video;

//purefunction-predictabel
function greetings(name){
    console.log("hello",$name);
}
greetings("ram");

//impure function-sside effect variabl outside the scope
let greet="hello";
function greeting(name){
    console.log(greet,name);
}

//IIFE Immediately invoke function expression
(function (){
 console.log("IIFE");
})()
