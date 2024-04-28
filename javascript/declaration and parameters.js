function Print(){
 console.log('printing the file');
}
Print();       //calling fn
Print         // to print function as a string

function parametry(parameter){
    console.log(parameter);
}
parametry('parameter is passed');

const Printer=function(){
    console.log('print');     //function as a variable
}
Printer();

const parameters=function(a,b){
    console.log("the value:",a,b);   //function as exprsn with parameter
}
parameters(10,20);

function bank(){
    let profit=100;
    let interest=10;
    let year=2;
    let totalamount=(profit+interest+year)/100;
    return totalamount;

}

// default parameter to override undefined value
function calculator(height,weight=0){    
    let BMI=height/weight;
    return (BMI);
}

//Rest parameters-only one per fn,must be the last 
function collections(things,...property){
    console.log(things)
    console.log(property)
}
collections("car","color","speed","brand","model");


