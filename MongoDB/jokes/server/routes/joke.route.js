//import the controller file and variable name to reference
const JokeController = require("../controllers/joke.controller")

module.exports = (app)=>{
    app.get("/api/hello", JokeController.sayHello)
    //come here to set up route after controller
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
    app.get('/api/jokes/random', JokeController.findRandomJoke)
}
