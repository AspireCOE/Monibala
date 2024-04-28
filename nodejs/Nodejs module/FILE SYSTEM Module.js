const file=require("node:fs");
const readcontent=file.readFileSync(".//file.txt","utf-8");//synchronous wave of reading file
console.log("first");
console.log(readcontent);
file.readFile(".//file.txt","utf-8",(error,data)=>{          //asynchronous
    if(error){
        console.log(error);

    }
    else{
        console.log(data);
    }
})

//synchronous
console.log("third");
file.writeFileSync(".//file.txt","this is fs module");

//asynchronous
file.writeFile(".//file.txt","fs module asynchronous written type",(error)=>{          //asynchronous
    if(error){
        console.log(error);

    }
    else{
        console.log("file written");
    }
})
