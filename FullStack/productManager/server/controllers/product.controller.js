const { model } = require('mongoose');
const Product = require('../models/product.model');

module.exports.sayHello = (req, res)=>{
    res.json({msg: "Hello PRODUCT Mongoose Modularized"})
}

//  //after setting up module.export, then go to routes file to set up route with the appropriat
module.exports.findAllProducts = (req, res) => {
Product.find()
        .then(allProducts => res.json({ results: allProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json({ results: oneSingleProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ results: newlyCreatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ results: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ results: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
