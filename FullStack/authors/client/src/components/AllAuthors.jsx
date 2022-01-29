import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {
    Link
} from "react-router-dom";


const AllAuthors = (props) =>{

    let [allAuthors, setAllAuthors] = useState([])
    let [deleted, setDeleted] = useState (false)

    useEffect(()=>{
    axios.get("http://localhost:8000/")
    .then(res=>{
        console.log("response when getting all authors", res)
        //response.data.results is what we want to save in state (this represented by an array)
        setAllAuthors(res.data.results)
    })
    .catch(err=>console.log("error", err))

},[deleted, props.newAuthorAdded])

//function runs when delete button is clicked and it will accept the id of the product to be deleted
const deleteAuthor =(authorId)=>{
    //axios deletes request to the backend to delete a product by id
    axios.delete(`http://localhost:8000/${authorId}`)
        .then(res=>{
            console.log("res when deleting", res)
            //response.data.results we want to save into a state(an array that represents ninja objects)
            setDeleted(!deleted)  //change the variable detected to new value each time we delete. We tell useEffect to listen for the deleted changes.
        })
        .catch(err => console.log("error", err))

}

    return(
    <div>
        <h1> All Authors List </h1>
        {allAuthors.map((authorObj, i)=>{
        return(
             
            <div key ={i} style = {{border: "1px solid black"}}>
                {/* <p>Product: {productObj.title}</p>  */}
                {/* <p>Description: {productObj.description}</p>
                <p>Price $: {productObj.price}</p>
                <p>Id: {productObj._id}</p> */}
                {/* <p><Link to={`/${authorObj._id}`}>{authorObj.authorName}</Link></p> */}
                {/* <p><button><Link to={`/${authorObj._id}`}>Details</Link></button></p> */}
                <p>{authorObj.authorName}</p>
                <p><button><Link to={`/edit/${authorObj._id}`}>Edit Author</Link></button></p>
                <button onClick= {()=>deleteAuthor(authorObj._id)}>Delete Author</button>
            </div>
        )
        })}
    </div>
    );

};


export default AllAuthors;
