const mongoose = require ('mongoose') //model can talk to database for value and keys added.

//this schema ({}) allows for the instructions of info needed for each Product. ID is auto generated
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title required"],
        minlength: [2, "Must have at least 2 characters"]
    },
    price:{
        type: Number,
        required: [true, "Must be in dollar amount"]
    },
    description:{
        type:String,
        required: [true, "Must have at least 5 characters"]
    }
    
});

const Product= mongoose.model('Product', ProductSchema); //mongoose is creating a table called Joke from JokeSchema

module.exports = Product;