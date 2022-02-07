import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
// import Icon from '@mui/material/Icon';

// import io from 'socket.io-client';



const NewNinjaForm = (props)=>{

    //create state variable for info collected
    //variable should match from models
    let[firstName, setFirstName] = useState("")
    let[lastName, setLastName] = useState("")
    let[numBelts, setNumBelts] = useState(null)
    let[isVeteran, setIsVeteran] = useState(false)

    //state variables store any validation error coming from the backend
    let[formErrors, setFormErrors] = useState({})

    //this allows for use to resubmit to a route with different forms?
    const history = useHistory();

    // const [socket] = useState(() => io(':8000'));  //this line of code enables client to connect to server running on port 8000

    //  socket.on("new_connection", data=>{
    //     console.log(data);
    // })

    const createNinjaSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(firstName, lastName, numBelts, isVeteran)

        //put the info from FORM into an object send one thing to backend API
        //keys and variable have same name from models and from state variable on line 7 thru 10 and from NinjaSchema in models are same
        let formInfoObj = {firstName, lastName, numBelts, isVeteran};

        axios.post("http://localhost:8000/api/ninjas", formInfoObj) //can get from POSTMAN too
            .then(res=>{
                console.log("response after posting", res)

                //if the res.data.results key is there, then form validations were valid
                //if the res.data.error key is there, then form not fill out correctly
                if(res.data.error){ //validation errors happened
                    setFormErrors(res.data.error.errors)
                }else{
                    // socket.emit("added_new_ninja", res.data.results)
                    //update the newNinjaAdded variable so that it triggers
                    props.setNewNinjaAdded(!props.newNinjaAdded)

                }
            })
            .catch(err=>console.log("error", err))

    }

    
    return(
        <div>
            <form onSubmit= {createNinjaSubmitHandler}>
                <div className="form-group">
                <label htmlFor="">First Name</label>
                <input  onChange = {(e) =>{setFirstName(e.target.value)}} type="text" name=""/>
                <p className="text-danger">{formErrors.firstName? formErrors.firstName.message : ""}</p> 
                </div>
                <div className="form-group">
                <label htmlFor="">Last Name</label>
                <input  onChange = {(e) =>{setLastName(e.target.value)}} type="text" name=""/>
                <p className="text-danger">{formErrors.lastName? formErrors.lastName.message : ""}</p> 
                </div>
                <div className="form-group">
                <label htmlFor="">Number of Belts</label>
                <input  onChange = {(e) =>{setNumBelts(e.target.value)}} type="text" name=""/>
                <p className="text-danger">{formErrors.numBelts? formErrors.numBelts.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Ninja a Veteran?</label>
                    <input onChange = {(e)=>{setIsVeteran(e.target.checked)}} type="checkbox" name="" id="" className="form-checkbox" />
                </div>
                <input type="submit" value="Create Ninja!" className="btn btn-success mt-3" />
                {/* <Icon>star</Icon>; */}
                
            </form>
            
        </div>
        )
}

export default NewNinjaForm;