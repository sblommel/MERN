const express = require("express"); //require is a way of importing something in js file---THESE 4 LINES are Step 1
const res = require("express/lib/response");
const app = express(); //create a variable called app--this variable is an instance of express
const port = 8000; //port number used in app.listen line at the bottom

//to extract info from POST request from new quote---STEP 7
app.use(express.json())
app.use(express.urlencoded({extended:true})) //able to read new quote info added



//create the info that will be listed in API--STEP 4
let quotes = [
    {content: "It is not the mountains ahead that will wear you out, it is the pebble in your shoe", author:"Muhammad Ali"},
    {content: "Comparison is a thief of joy", author:"Roosevelt"},
    {content: "Life is Wisdom. Live Life", author:"Samira"}
]

//like in flask--@app.route("/hello"
// def sayHello();
//return "hello"---this is flask


//this is an api endpoint localhost: 8000/api/hello---THIS IS STEP 3
app.get("/api/hello", (req, res)=>{
    res.json({msg:"Hello express"})
})

//get all quotes---This is Step 5
app.get("/api/quotes", (req,res)=>{
    res.json({count: quotes.length, results: quotes})
})

//get one quote by "id"---This is Step 6 to get certain info at an index
app.get("/api/quotes/:idx", (req, res)=>{
    res.json({results: quotes[req.params.idx]})
    //line  shows variable in a route--params.idx
})

//add a new quote use POST---STEP 7 along with
//got to Postman and POST api/quotes and then go to Body and x-body-urlencoded and need to do content and author
app.post("/api/quotes", (req, res)=>{
    console.log("req.body", req.body) // console.log will show up in VS code terminal.
    quotes.push(req.body) //push the info into quotes array
    res.json({msg: "success", results: quotes})
})

//update a new quote--STEP 8 PUT 
app.put("/api/quotes/:idx",(req, res) => {
    //two parts to PUT: which quote to update (idx) and what data we want to use to update (req.body)
    quotes[req.params.idx] = req.body //update quotes array at specified index (coming from route) with the form info -POSTMAN in this case.
    //Go to POSTMAN and select PUT then route is api/quotes/1
    res.json({results: quotes})
})


app.delete("/api/quotes/:idx", (req, res)=>{
    //you can use splice to remove a quote from an array---STEP 9 for deleting
    quotes.splice(req.param.idx,1)
    res.json({results: quotes})
})


// line at the bottom of file---THIS IS STEP 2.
app.listen( port, () => console.log(`Listening on ${port}`));