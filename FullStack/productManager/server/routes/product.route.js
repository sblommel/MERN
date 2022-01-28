//import the controller file and variable name to reference
const ProductController = require("../controllers/product.controller")

module.exports = (app)=>{
    app.get("/api/hello", ProductController.sayHello);
    //come here to set up route after controller
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findOneSingleProduct);
    app.put('/api/product/:id', ProductController.updateExistingProduct);
    app.post('/api/product', ProductController.createNewProduct);
    app.delete('/api/product/:id', ProductController.deleteAnExistingProduct);
    
}