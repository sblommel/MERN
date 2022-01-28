import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {
    Link
} from "react-router-dom";


const AllProducts = (props) =>{

    let [allProducts, setAllProducts] = useState([])
    let [deleted, setDeleted] = useState (false)

    useEffect(()=>{
    axios.get("http://localhost:8000/")
    .then(res=>{
        console.log("response when getting all products", res)
        //response.data.results is what we want to save in state (this represented by an array)
        setAllProducts(res.data.results)
    })
    .catch(err=>console.log("error", err))

},[deleted, props.newProductAdded])

//function runs when delete button is clicked and it will accept the id of the ninja to be deleted
const deleteProduct =(productId)=>{
    //axios deletes request to the backend to delete a ninja by id
    axios.delete(`http://localhost:8000/${productId}`)
        .then(res=>{
            console.log("res when deleting", res)
            //response.data.results we want to save into a state(an array that represents ninja objects)
            setDeleted(!deleted)  //change the variable detected to new value each time we delete. We tell useEffect to listen for the deleted changes.
        })
        .catch(err => console.log("error", err))

}

    return(
    <div>
        <h1> All Product List </h1>
        {allProducts.map((productObj, i)=>{
        return(
            <div key ={i}> 
            {/* <div key ={i} style = {{border: "1px solid black"}}> */}
                {/* <p>Product: {productObj.title}</p>  */}
                {/* <p>Description: {productObj.description}</p>
                <p>Price $: {productObj.price}</p>
                <p>Id: {productObj._id}</p> */}
                
                <p><Link to={`/${productObj._id}`}>{productObj.title}</Link></p>
                {/* <p><button><Link to={`/${productObj._id}`}>Details</Link></button></p> */}
                {/* <p><button><Link to={`/edit/${productObj._id}`}>Edit</Link></button></p>
                <button onClick= {()=>deleteProduct(productObj._id)}>Delete Product</button> */}
            </div>
        )
        })}
    </div>
    );

};


export default AllProducts;
