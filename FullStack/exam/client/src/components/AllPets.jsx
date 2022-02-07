import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {
    Link
} from "react-router-dom";


const AllPets = (props) =>{

    let [allPets, setAllPets] = useState([])
    let [deleted, setDeleted] = useState (false)

    useEffect(()=>{
    axios.get("http://localhost:8000/")
    .then(res=>{
        console.log("response when getting all authors", res)
        //response.data.results is what we want to save in state (this represented by an array)
        setAllPets(res.data.results)
    })
    .catch(err=>console.log("error", err))

},[deleted, props.newPetAdded])

//function runs when delete button is clicked and it will accept the id of the product to be deleted
const deletePet =(petId)=>{
    //axios deletes request to the backend to delete a product by id
    axios.delete(`http://localhost:8000/${petId}`)
        .then(res=>{
            console.log("res when deleting", res)
            //response.data.results we want to save into a state(an array that represents ninja objects)
            setDeleted(!deleted)  //change the variable detected to new value each time we delete. We tell useEffect to listen for the deleted changes.
        })
        .catch(err => console.log("error", err))

}

    return(
    <div>
        <h3> These pets are looking for a good home </h3>
        {allPets.map((petObj, i)=>{
        return(
             
            //  <div key ={i}>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th>Pet Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                        </tr>                    
                    </thead>
                    <tbody>
                    <tr>
                        <td>{petObj.petName}</td>
                        <td>{petObj.petType}</td>
                        <td><Link to={`/pets/${petObj._id}`}>Details</Link></td> 
                        <td><Link to={`/pets/${petObj._id}/edit`}>Edit Pet</Link></td>
                        {/* <td><button class="btn btn-danger" onClick= {()=>deletePet(petObj._id)}>Adopt Pet</button></td> */}
                    </tr> 
                    </tbody>   
                
                </table>
                

                
            // </div>
        )
        })}
    </div>
    );

};


export default AllPets;
