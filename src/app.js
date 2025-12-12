const express = require("express");
const app = express();


app.use('/user',(req,res)=>{
    res.send("HAHAHAHAHAHAHAHA");
});

// This will only handle GET requests to /user
app.get('/user',(req,res)=> {
    res.send({firstName:"Bhargavi",lastName:"Reddy"});
});
//Handle POST request - save data to the database
app.post('/user',(req,res)=>{
    res.send('Data is successfully saved to the DB');
});
// Handle DELETE request - Delete user data
app.delete('/user',(req,res)=>{
    res.send('Deleted Successfully!!');
});
// This will handle all the HTTP method requests to /test
app.use('/test',(req,res)=>{
    res.send('Hello from the server');
});

//keep this generic one last order is matters
app.use('/user',(req,res)=>{
    res.send("HAHAHAHAHAHAHAHA");
});
app.listen(3000, ()=> {
    console.log("Server is successfully listening the port 3000");
});