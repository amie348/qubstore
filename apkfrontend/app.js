var express = require('express')
var app = express();
const path=require('path');
const env=require('dotenv');
const axios = require("axios");



app.use(express.static(path.join(__dirname,"public")));

// app.use("*" , async(req,res)=>{
//     const  result  = await axios.get(`${url}/apk/updateVisitors`);
//     console.log("Visitor Updated");
// })

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, `/public/home.html`));
});


env.config({path:'/config.env'});

app.listen(process.env.PORT||5000,console.log("application started at 5000"))