const express = require("express");
const app = express();

app.use("roue", [rH,rH2,rH3,rH4,rH5]);
app.use("roue", rH,[rH2,rH3],rH4,rH5); 
app.use("roue", rH,[rH2],rH3,rH4,rH5);
// All are given the same response

// Write how many route handler you want finally send the response
app.get("/user",(req,res,next)=>{
    console.log("Handing the route user!!!");
    // res.send('1st Response')
    next();
},(req,res,next)=>{
    console.log("Handing the route user 2!!!")
    // res.send("2nd response");
    next();
},(req,res,next)=>{
    console.log("Handing the route user 3!!!")
    // res.send("3rd Response")
    next()
},(req,res,next)=>{
    console.log("Handing the route user 4!!!")
    // res.send("4th Response")
    next()
},(req,res,next)=>{
    console.log("Handing the route user 5!!!")
    res.send("5th Response")
})


app.listen(3000, ()=> {
    console.log("Server is successfully listening the port 3000");
});