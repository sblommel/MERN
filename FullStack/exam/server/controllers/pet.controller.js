const { model } = require('mongoose');
const Pet = require('../models/pet.model');

module.exports.sayHello = (req, res)=>{
    res.json({msg: "Hello Mongoose Pet Modularized!!"})
}

module.exports.findAllPets = (req, res) => {
    console.log("running find all pets!!!")
    Pet.find()
        .then(allPets => {
            //you can console.log here as well to debug if needed
            res.json({results: allPets})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createPet = (req, res) => {
    console.log("Trying to create pet!")
    console.log("req body", req.body)
    Pet.create(req.body) //req.body represents the form info
        .then(newlyCreatedPet => res.json({ results: newlyCreatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })  //curly brackets indicate the id generated by mongoose _id and request parameters of the id
        .then( singlePet => {res.json({ results: singlePet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updatePet = (req, res)=>{
    Pet.findOneAndUpdate({_id: req.params.id}, //which author to update
        req.body, {new: true, runValidators: true })
    //the runValidators updates the new info to in all routes
    .then(updatedAuthor=>{
        res.json({results: updatedPet})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deletedPet=>{
            res.json({results: deletedPet })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}