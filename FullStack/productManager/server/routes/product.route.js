//import the controller file and variable name to reference
const ProductController = require("../controllers/product.controller")

module.exports = (app)=>{
    app.get("/hello", ProductController.sayHello);
    //come here to set up route after controller
    app.get('/', ProductController.findAllProducts);
    app.get('/:id', ProductController.findOneSingleProduct);
    app.put('/:id', ProductController.updateExistingProduct);
    app.post('/', ProductController.createNewProduct);
    app.delete('/:id', ProductController.deleteAnExistingProduct);
    
}