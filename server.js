require("dotenv").config()
const express = require("express")
const app = express();
const Port = process.env.PORT || 5000
const mongoose = require("./db")
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
var i1 = [""]
app.get("/", (req, res) => {
    res.render("list", { newLists: i1 })
})
app.post("/", (req, res) => {
    var i = req.body.n;
    i1.push(i)
    // console.log(i)
    res.redirect("/")
})

app.listen(Port, () => {
    console.log(`App is running on Port ${Port}`)
})