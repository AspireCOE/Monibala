//variable declaration
//var...
var apple = 50;
var Mango = 90;
var price = apple+ mango;
//let
let investment= 500;
let  profit= 600;
let difference=investment-profit;

//const
const age= 5;
const savings = 1000;
const fiveyears =age*savings;

//scope of the variable
var client="hello";
function example(){
    console.log(client);
}
example();

function example(){
    var client="hello world";
    console.log(client);
}
example();

function example(){
    if(true){
        let server="stack";
        console.log(server);
    }
}
example();

