 const express = require('express');
const bodyParser = require('body-parser');

const axios=require('axios');
const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('/', (request, response) => {
    res.sendFile(__dirname + '/index.html');
});
app.post('/submit', (request, response) => {
    const { username, password, mobile, email } = request.body;
    const userdata={
        username,
        password,
        mobile,
        email
    }
    
axios.post("http://localhost:3000/users",userdata).then(data=>{
    respond.send("user data saved success")
}).catch(error=>console.log("error saving the data",error))
});

app.get("/getuser",(request,response)=>{

    axios.get("http://localhost:3000/users").then(dbresponse=>{
        response.json(dbresponse.data)
    }).catch(error=>{
        console.log(error)
    })
})

app.post("/changePassword",(request,response)=>{

const{id,pass}=req.body;
const password={
    pass
}
 
console.log(password);

axios.patch(`http://localhost:3000/users/${id}`,password).then(dbresponse=>{
    response.send("password updated")
}).catch(error=>console.log(err))


})


//axios.post().then().catch()

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

