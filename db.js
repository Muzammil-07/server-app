const mongoose = require("mongoose");




 mongoose.connect(process.env.DB_URL).then(()=>{
     console.log("connected")
 }).catch((err)=>{
     console.log(err)
 })
 
 mongoose.Schema


module.exports= mongoose;