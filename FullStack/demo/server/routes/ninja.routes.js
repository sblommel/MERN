//import the controller file and give it variable to refernce
const NinjaController = require("../controllers/ninja.controllers");

//these are the backend routes or API endpoints
module.exports = app => {
    app.get("/api/hello", NinjaController.sayHello)
   app.get("/api/ninjas", NinjaController.findAllNinjas);
    app.get("/api/ninjas/:id", NinjaController.findOneNinja);
    app.put("/api/ninjas/:id", NinjaController.updateNinja)
    app.post("/api/ninjas", NinjaController.createNinja)
    app.delete("/api/ninjas/:id", NinjaController.deleteNinja)
    app.get("/api/ninjas/random", NinjaController.findRandomNinja)
}
