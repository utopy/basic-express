//PROCESS VARIABLES LOADED FROM .ENV FILE
//CREATE .ENV FILE BEFORE RUNNING THIS APP!

require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

const Routes = require("./routes")

const PORT = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())
app.use("/", Routes)


app.listen(PORT, ()=>{
    console.log("listening on port: " + PORT)
})