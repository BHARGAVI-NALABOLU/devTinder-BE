const express = require("express");
const app = express();

``
app.use("/tested",(req,res)=>{
    res.send("Hello from the server!!!");
})

app.use("/namaste",(req,res)=>{
    res.send("Hello Namaste!!");
})
app.listen(3000, ()=> {
    console.log("Server is successfully listening the port 3000");
});