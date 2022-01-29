const  mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName:{
        type: String,
        required: [true, "Author name required"],
        minlength: [3, "Author name must have at least 3 characeters"]
    }

});

//Here we are creating a variable "Author" which is going to represent the name of our table
const Author= mongoose.model('Author', AuthorSchema);

module.exports = Author;