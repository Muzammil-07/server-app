require ("dotenv").config()
const express =  require("express")
const app = express();
const Port = process.env.PORT || 5000
const mongoose = require ("./db")
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
   res.render("list")
})
app.post("/",(req,res)=>{
    var i = req.body.n;
    console.log(i)
})
 
app.listen(Port,()=>{
    console.log(`App is running on Port ${Port}` )
})