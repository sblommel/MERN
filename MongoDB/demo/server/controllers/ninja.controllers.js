//The controller needs to be able to talk to the model (the code that represents the DB table)
const { model } = require('mongoose');
const Ninja = require('../models/ninja.models');

module.exports.sayHello = (req, res)=>{
    res.json({msg: "Hello Mongoose Modularized"})
}

module.exports.findAllNinjas = (req, res) => {
    console.log("running find all ninjas!!!")
    Ninja.find()
        .then(allNinjas => {
            //you can console.log here as well to debug if needed
            res.json({results: allNinjas})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNinja = (req, res) => {
    console.log("req body", req.body)
    Ninja.create(req.body) //req.body represents the form info
        .then(newlyCreatedNinja => res.json({ results: newlyCreatedNinja }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneNinja = (req, res) => {
    Ninja.findOne({ _id: req.params.id })  //curly brackets indicate the id generated by mongoose _id and request parameters of the id
        .then( singleNinja => {res.json({ results: singleNinja })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateNinja = (req, res)=>{
    Ninja.findOneAndUpdate({_id: req.params.id}, //which ninja to update
        req.body, {new: true, runValidators: true })
    //the runValidators updates the new info to in all routes
    .then(updatedNinja=>{
        res.json({results: updatedNinja})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.deleteNinja = (req, res) => {
    Ninja.deleteOne({ _id: req.params.id })
        .then(deletedNinja=>{
            res.json({results: deletedNinja })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findRandomNinja = (req, res) => {
    console.log("trying to get random ninja")
    function getRandomInt(max){
        return Math.floor(Math.random()*max);
    }
    //get array of all ninjas and pick random index from array
    Ninja.find()
        .then(allNinjas=>{
            let randomIndex = getRandomInt(allNinjas.length)
            res.json({results: allNinjas[randomIndex] })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}