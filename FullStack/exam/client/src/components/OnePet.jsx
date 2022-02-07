import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import {useHistory} from "react-router-dom";

const OnePet = (props) => {
    const { id } = useParams();
           
    const history = useHistory(); //to redirect after deleting a product

    const [petDetails, setPetDetails] = useState({}) //here we want to show the details of product

    useEffect(()=>{
        axios.get(`http://localhost:8000/pets/${id}`)
        .then(res=>{
            console.log("response when making request for one product", res)
            //save res.data.results into state
            setPetDetails(res.data.results)
        })
        .catch(err=> console.log(err))
    }, [])

    const deletePet = ()=>{
        console.log("deleting!!!")
        axios.delete(`http://localhost:8000/pets/${id}`)
            .then(res=>{
                console.log("response when deleting", res)
                history.push("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <>
        <h4>Details about Pet: {petDetails.petName}</h4>
        <button class="btn btn-danger" onClick = {deletePet}>Adopt {petDetails.petName}</button>
        <div style = {{border: "1px solid black"}}>
            
            <p>Pet Type: {petDetails.petType}</p>
            <p>Description: {petDetails.petDescription}</p>
            {/* <p>Pet Skills:
                <ul>{petDetails.petSkillOne}</ul>
                <ul>{petDetails.petSkillTwo}</ul>
                <ul>{petDetails.petSkillThree}</ul>
            </p>     */}

                
            <p>Pet Skills: {petDetails.petSkillOne},{petDetails.petSkillTwo},{petDetails.petSkillThree}</p>
            {/* <p>ID: {id}</p>  */}
            
            
        </div>
        </>
        
    );
};
export default OnePet;
