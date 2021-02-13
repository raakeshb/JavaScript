const express = require('express');
const app = express();

let HTTP_PORT = process.env.PORT;
app.listen(HTTP_PORT , ()=>{
    console.log("Listening on:" + HTTP_PORT);
})

app.get("/",(req,res)=>{
    res.send("Hello World");
})