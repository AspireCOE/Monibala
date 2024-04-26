//Exception handling
//try,catch,throw,finally
try{
console.log(test);
}
catch(error){
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
}
finally{
    console.log("error detection");
}
//throw
try{
    throw new Error("my error");
    const ans=getQuotient(5,10);
    if(ans==infinity){
        throw new Error("the number has result infinity");
    }
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("error detection");
}
function getQuotient(input1,input2){
    
    return input1/input2;
}


//catch handling multiple error
try{
    const ans=getQuotient(5,0);
    if(ans==infinity){
        throw new Error("the number has result infinity");
    }
}
catch(error){
    if(error.name="Error"){
        console.log("default error");

    }
    else if(error.name="isnotvalid");{
        console.log("thrown error");
    }
}
finally{
    console.log("error detection");
}
function getQuotient(input1,input2){
    if(isNaN(input1)||isNaN(input2)){
        let error=new Error("Its not a number");
        error.name="isnotvalid";
        throw error;
    }
    return input1/input2;
}

//type error //reference error
try{
    const ans=getQuotient(5,0);
    if(ans==infinity){
        throw new Error("the number has result infinity");
    }
    console.log(ans1.toUpperCase);
}
catch(error){
    console.log(error.name);
    if(error.name="Error"){
        console.log("default error");

    }
    else if(error.name="isnotvalid");{
        console.log("thrown error");
    }
}
finally{
    console.log("error detection");
}
function getQuotient(input1,input2){
    if(isNaN(input1)||isNaN(input2)){
        let error=new Error("Its not a number");
        error.name="isnotvalid";
        throw error;
    }
    return input1/input2;
}