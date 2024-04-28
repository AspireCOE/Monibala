const file=require("node:fs/promises");
console.log("first");
file.readFile("file.txt","utf-8")
.then((data)=>console.log(data))
.catch((error)=>console.log(error));
console.log("second");

async function readfile(){
    try{
        const data=await file.readFile("file.txt","utf-8");
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
readfile();