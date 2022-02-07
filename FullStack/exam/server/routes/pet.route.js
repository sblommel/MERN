const PetController = require("../controllers/pet.controller")

module.exports = (app)=>{
    app.get("/hello", PetController.sayHello);
    // come here to set up route after controller
    app.get('/', PetController.findAllPets);
    app.get('/pets/:id', PetController.findOnePet);
    app.put('/pets/:id/edit', PetController.updatePet);
    app.post('/pets/new', PetController.createPet);
    app.delete('/pets/:id', PetController.deletePet);
    
 }