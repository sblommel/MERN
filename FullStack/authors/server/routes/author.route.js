//import the controller file and variable name to reference
const AuthorController = require("../controllers/author.controller")

module.exports = (app)=>{
    app.get("/hello", AuthorController.sayHello);
    // come here to set up route after controller
    app.get('/', AuthorController.findAllAuthors);
    app.get('/:id', AuthorController.findOneAuthor);
    app.put('/:id', AuthorController.updateAuthor);
    app.post('/', AuthorController.createAuthor);
    app.delete('/:id', AuthorController.deleteAuthor);
    
 }