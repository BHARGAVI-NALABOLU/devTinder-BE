const express = require("express");
const app = express();

app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.query)
    res.send({firstName:"Bhargavi",lastName:"Reddy"});
});

app.listen(3000, ()=> {
    console.log("Server is successfully listening the port 3000");
});