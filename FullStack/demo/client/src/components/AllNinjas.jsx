import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {
    Link
} from "react-router-dom";


const AllNinjas = (props) =>{

    let [allNinjas, setAllNinjas] = useState([])
    let [deleted, setDeleted] = useState (false)

    useEffect(()=>{
    axios.get("http://localhost:8000/api/ninjas/")
    .then(res=>{
        console.log("response when getting all ninjas--", res)
        //response.data.results is what we want to save in state (this represented by an array)
        setAllNinjas(res.data.results)
    })
    .catch(err=>console.log("error", err))

},[deleted, props.newNinjaAdded])

//function runs when delete button is clicked and it will accept the id of the ninja to be deleted
const deleteNinja =(ninjaId)=>{
    //axios deletes request to the backend to delete a ninja by id
    axios.delete(`http://localhost:8000/api/ninjas/${ninjaId}`)
        .then(res=>{
            console.log("res when deleting", res)
            //response.data.results we want to save into a state(an array that represents ninja objects)
            setDeleted(!deleted)  //change the variable detected to new value each time we delete. We tell useEffect to listen for the deleted changes.
        })
        .catch(err => console.log("error", err))

}

    return(
    <div>
        <h1> All ninjas </h1>
        {allNinjas.map((ninjaObj, i)=>{
        return(
            <div key ={i} style = {{border: "1px solid black"}}>
                <p>{ninjaObj.firstName} {ninjaObj.lastName}</p>
                <p>Number of belts: {ninjaObj.numBelts}</p>
                <p>Id: {ninjaObj._id}</p>
                {/* <p>Veteran status: {ninjaDetails.isVeteran? "Is a Veteran": "Not a Veteran"}</p> */}
                <p><button className="btn btn-info mt-3"><Link to={`/ninjas/${ninjaObj._id}`}>Details</Link></button></p>
                <p><button className="btn btn-warning mt-3"><Link to={`/ninjas/edit/${ninjaObj._id}`}>Edit</Link></button></p>
                <button className="btn btn-danger mt-3" onClick= {()=>deleteNinja(ninjaObj._id)}>Delete Ninja</button>
            </div>
        )
        })}
    </div>
    );

};


export default AllNinjas;
