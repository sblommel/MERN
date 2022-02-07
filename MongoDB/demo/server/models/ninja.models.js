const  mongoose = require('mongoose');

const NinjaSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "First name required"],
        minlength: [2, "First name has at least 2 characeters"]
    },
    lastName:{
        type:String,
        required: [true, "Last name required"]
    },
    numBelts:{
        type: Number,
        required : [true, "Number of belts required"],
        min: [0, "number of belts at least 0."]
    },

    isVeteran:{
        type:Boolean
    }
});

const Ninja= mongoose.model('Ninja', NinjaSchema);

module.exports = Ninja;