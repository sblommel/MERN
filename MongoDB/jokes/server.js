const express = require("express")  // import express Step 1
const mongoose = require('mongoose');//import mongoose Step 2

const app = express(); // initialize express Step 3
const port = 8000; //specify port in a variable Step 4

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//this allows connection to DB thru config file
require("./server/config/config")

// app.get("/api/hello", (req, res)=>{ //step 6n
//     res.json({msg: "Hello Jokes world!!!"})
// })

require('./server/routes/joke.route')(app)


app.listen( port, () => console.log (`Listening on port: ${port}`) ); //Step 5