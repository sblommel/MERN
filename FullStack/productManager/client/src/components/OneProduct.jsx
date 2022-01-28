import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import {useHistory} from "react-router-dom";

const OneProduct = (props) => {
    const { id } = useParams();
           
    const history = useHistory(); //to redirect after deleting a product

    const [productDetails, setProductDetails] = useState({}) //here we want to show the details of product

    useEffect(()=>{
        axios.get(`http://localhost:8000/${id}`)
        .then(res=>{
            console.log("response when making request for one product", res)
            //save res.data.results into state
            setProductDetails(res.data.results)
        })
        .catch(err=> console.log(err))
    }, [])

    // const deleteProduct = ()=>{
    //     console.log("deleting!!!")
    //     axios.delete(`http://localhost:8000/${id}`)
    //         .then(res=>{
    //             console.log("response when deleting", res)
    //             history.push("/")
    //         })
    //         .catch(err=>console.log(err))
    // }

    return (
        <div>
            <h1>One product</h1>
            <p>{productDetails.title} </p>
            <p>Description: {productDetails.description}</p>
            <p>Price $: {productDetails.price}</p>
            <p>ID: {id}</p>
            {/* <p>Veteran status: {ninjaDetails.isVeteran? "Is a Veteran": "Not a Veteran"}</p> */}
            {/* <button onClick = {deleteNinja}>Delete</button> */}
        </div>
        
    );
};
export default OneProduct;
