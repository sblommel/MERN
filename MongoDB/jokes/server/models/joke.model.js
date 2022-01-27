const mongoose = require ('mongoose') //model can take to database

//this schema ({}) allows for the instructions of info each Joke has. ID is auto generated
const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "Set up  required"],
        minlength: [2, "First name has at least 2 characeters"]
    },
    punchline:{
        type:String,
        required: [true, "Punchline required"]
    },
    // created_at:{
    //     timestamps = true
    // }
});




//here we are creating a variable "Joke" represents the name of the table/collection
const Joke= mongoose.model('Joke', JokeSchema); //mongoose is creating a table called Joke from JokeSchema

module.exports = Joke;