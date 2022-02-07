import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";

const NewPet = ()=>{

    //create state variable for info collected
    //variable should match from models
    let[petName, setPetName] = useState("")
    let[petType, setPetType] = useState("")
    let[petDescription, setPetDescription] = useState("")
    let[petSkillOne, setPetSkillOne] = useState("")
    let[petSkillTwo, setPetSkillTwo] = useState("")
    let[petSkillThree, setPetSkillThree] = useState("")

    //state variables store any validation error coming from the backend
    let[formErrors, setFormErrors] = useState({})

    //this allows for use to resubmit to a route with different forms?
    const history = useHistory();

    const createPetSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(petName, petType, petDescription)

        //put the info from FORM into an object send one thing to backend API
        //keys and variable have same name from models and from state variable on line 7 thru 10 and from PetSchema in models are same
        let formInfoObj = {petName, petType, petDescription, petSkillOne, petSkillTwo, setPetSkillThree };

        axios.post("http://localhost:8000/pets/new", formInfoObj) //can get from POSTMAN too
            .then(res=>{
                console.log("response after posting", res)
                

                //if the res.data.results key is there, then form validations were valid
                //if the res.data.error key is there, then form not fill out correctly
                if(res.data.error){ //validation errors happened
                    setFormErrors(res.data.error.errors)
                }else{
                    //update the newAuthor variable so that it triggers
                    // props.setAuthorName(!props.authorName) and deleted props from line 6 (props)
                    // props.setNewPetAdded(!props.newPetAdded)
                    history.push("/")

                }
            })
            .catch(err=>console.log("error", err))

    }

    return(
        <div>
            <form onSubmit= {createPetSubmitHandler} button type="button" button class="btn btn-secondary">
                <div className="form-group">
                    <label htmlFor="">Pet Name</label>
                    <input  onChange = {(e) =>{setPetName(e.target.value)}} type="text" name=""/>
                    <p className="text-danger">{formErrors.petName? formErrors.petName.message : ""}</p> 
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Type</label>
                    <input  onChange = {(e) =>{setPetType(e.target.value)}} type="text" name=""/>
                    <p className="text-danger">{formErrors.petType? formErrors.petType.message : ""}</p> 
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input  onChange = {(e) =>{setPetDescription(e.target.value)}} type="text" name=""/>
                    <p className="text-danger">{formErrors.petDescription? formErrors.petDescription.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Skill One (optional): </label>
                    <input  onChange = {(e) =>{setPetSkillOne(e.target.value)}} type="text" name=""/>
                    {/* <p className="text-danger">{formErrors.petSkillOne? formErrors.petSkillOne.message : ""}</p> */}
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Skill Two (optional):</label>
                    <input  onChange = {(e) =>{setPetSkillTwo(e.target.value)}} type="text" name=""/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Skill Three (optional):</label>
                    <input  onChange = {(e) =>{setPetSkillThree(e.target.value)}} type="text" name=""/>
                    
                </div>
                
                {/* <button class="btn btn-primary">Submit</button> */}
                <input type="submit" value="Add a Pet!" className="btn btn-success mt-3" />
            </form>
            
        </div>
    )
}

export default NewPet;