const  mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName:{
        type: String,
        required: [true, "Pet name required"],
        minlength: [3, "Pet name must have at least 3 characters"]
    },

    petType:{
        type: String,
        required: [true, "Type of animal required"],
        minlength: [3, "Type must have at least 3 characters"]
    },

    petDescription:{
        type: String,
        required: [true, "Description of animal required"],
        minlength: [3, "Description must have at least 3 characters"]
    },

    petSkillOne:{
        type: String,
        // required: [true, "Skill required"]
        
    },

    petSkillTwo:{
        type: String,
            
    },

    petSkillThree:{
        type: String,
            
    }

});

//Here we are creating a variable "Author" which is going to represent the name of our table
const Pet= mongoose.model('Pet', PetSchema);

module.exports = Pet;