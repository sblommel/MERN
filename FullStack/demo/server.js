//STEP 1 for back end
const express = require("express") //import express
const cors = require ("cors") // STEP A importing cors to allow us to share our api with react application on the front end

const app = express(); //initialize express
const port = 8000; //specify the port in a variable


//STEP 2 for back end
//need these two lines below to be able to read and extract the info recieved from post requests for back end as well
app.use(express.json())
app.use(express.urlencoded({extended: true})) //be able to read information on the POSTMAN form
app.use(cors())//have the app be able to use the cross origin resource sharing feature--this line gets added to connect with React

//connect to MongoDB database using mongoose
//modularization occurred with config.js
require("./server/config/config")
//config from folder and config from file




// app.get("/api/hello", (req,res)=>{
//     res.json({msg: "Hello mongoose!"})
// })

require('./server/routes/ninja.routes')(app)



app.listen(port, ()=>console.log(`Listening on port: ${port}`));
