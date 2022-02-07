import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const EditPet = () => {

    //get the route param info containing the id of the object we want to edit
    const { id } = useParams();

    //state variable to save info we get back from api about one author
    let [petInfo, setPetInfo] = useState ({
        petName: "",
        petType:"",
        petDescription:"",
        petSkillOne:"",
        petSkillTwo:"",
        petSkillThree:""
    })

    //state variables store any validation error coming from the backend
    let[formErrors, setFormErrors] = useState({})

    useEffect(()=>{
        //make an axios call to get information from the backend about one author using the api endpoint to get one author
        axios.get(`http://localhost:8000/pets/${id}/`)
        .then(res=>{
            console.log("response is this", res)
            setPetInfo(res.data.results)
                        
        })
        .catch(err=> console.log(err))
    
    }, [])
    
    
    //initialize useHistory so we can redirect after the update of the form
    const history = useHistory();

    //changehandler that will be called each time the form info is being changed
    const changeHandler = (e)=>{
        
        console.log("changed in form detected!!")
        if(e.target.type === "checkbox"){
            setPetInfo({
                ...petInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setPetInfo({
                ...petInfo,
                [e.target.name]: e.target.value
            })

        }
    }
    

    const updatePetSubmitHandler = (e)=>{
        e.preventDefault();
        
        axios.put(`http://localhost:8000/pets/${id}/edit`, petInfo)
            .then(res=>{
                console.log("response put request", res)
                history.push("/")
                // if(res.data.error){ //validation errors happened
                //     setFormErrors(res.data.error.errors)
                // }else{
                //     //only need the if/else statement for validation errors
                //     //.push will update the new info
                //     history.push("/")
                    
                // }
                                        
            })
            .catch(err=>console.log("error in submitting post request",err))  

    }

    return (
        <div>
            <h4>Edit Pet</h4>
            <form onSubmit = {updatePetSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Pet Name</label>
                    <input type="text" name="petName" id="" className="form-control" value={petInfo.petName} onChange={changeHandler} />
                    <p className="text-danger">{formErrors.petName? formErrors.petName.message : ""}</p>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Type</label>
                    <input type="text" name="petType" id="" className="form-control" value={petInfo.petType} onChange={changeHandler} />
                    <p className="text-danger">{formErrors.petType? formErrors.petType.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" name="petDescription" id="" className="form-control" value={petInfo.petDescription} onChange={changeHandler} />
                    <p className="text-danger">{formErrors.petDescription? formErrors.petDescription.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill One (optional):</label>
                    <input type="text" name="petSkillOne" id="" className="form-control" value={petInfo.petSkillOne} onChange={changeHandler} />
                    <p className="text-danger">{formErrors.petSkillOne? formErrors.petSkillOne.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill TWO (optional):</label>
                    <input type="text" name="petSkillTwo" id="" className="form-control" value={petInfo.petSkillTwo} onChange={changeHandler} />
                    <p className="text-danger">{formErrors.petSkillTwo? formErrors.petSkillTwo.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill Three (optional):</label>
                    <input type="text" name="petSkillThree" id="" className="form-control" value={petInfo.petSkillThree} onChange={changeHandler} />
                    <p className="text-danger">{formErrors.petSkillThree? formErrors.petSkillThree.message : ""}</p>
                    <button class="btn btn-primary">Submit Edit for Pet</button>
                </div>
                 
                                 
            </form>
        </div>
    );
};

export default EditPet; 

