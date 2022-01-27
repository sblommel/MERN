const { model } = require('mongoose');
const Joke = require('../models/joke.model');

module.exports.sayHello = (req, res)=>{
    res.json({msg: "Hello JOKES Mongoose Modularized"})
}

 //after setting up module.export, then go to routes file to set up route with the appropriat
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ results: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ results: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ results: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ results: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ results: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findRandomJoke = (req, res) => {
    console.log("trying to get random joke")
    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }
    //get array of all jokes and pick random index from array
    Joke.find()
        .then(allJokes=>{
            let randomIndex = getRandomInt(allJokes.length)
            res.json({results: allJokes[randomIndex]})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}