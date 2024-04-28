const data = new Promise((resolve, reject) => {
setTimeout(() => {
    const ans= "Anto";
    
    if (ans) {
        resolve (ans);
    } else {
    reject(new Error("No data"));
    }
}, 1000);
});
function getUserDetails (inputName) {
    const userDetails = new Promise((resolve, reject) => {
        setTimeout(() => {
            let userDetails = [{ name: "ram", age: 30 }];
            const user = userDetails.find((user) => user.name === inputName);
    
    if (user) {

    resolve(user);
     } else {
    reject("Error Occurred");
    }
    }, 1000);
    });
    return userDetails;
}
data
.then((name)=>{
    return getUserDetails(name);
})
.then((userDetail)=>{
    console.log(userDetail)
})
.catch((error)=>{
    console.log(error.stack);
})
.finally(()=>{

})
    
    
