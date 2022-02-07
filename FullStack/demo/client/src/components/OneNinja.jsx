import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import {useHistory} from "react-router-dom";

const OneNinja = (props) => {
    const { id } = useParams();
           
    const history = useHistory(); //to redirect after deleting a ninja

    const [ninjaDetails, setNinjaDetails] = useState({}) //here we want to show the details of Ninja

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
        .then(res=>{
            console.log("response when making request for one ninja", res)
            //save res.data.results into state
            setNinjaDetails(res.data.results)
        })
        .catch(err=> console.log(err))
    }, [])

    const deleteNinja = ()=>{
        console.log("deleting!!!")
        axios.delete(`http://localhost:8000/api/ninjas/${id}`)
            .then(res=>{
                console.log("response when deleting", res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>One ninja</h1>
            <h1>One Ninja Info</h1>
            <h4>Details about {ninjaDetails.firstName} {ninjaDetails.lastName}</h4>
            <p>Number of belts: {ninjaDetails.numBelts}</p>
            <p>ID: {id}</p>
            <p>Veteran status: {ninjaDetails.isVeteran? "Is a Veteran": "Not a Veteran"}</p>
            <button className="btn btn-primary mt-3" onClick = {deleteNinja}>Delete</button>
        </div>
        
    );
};
export default OneNinja;

 

 
