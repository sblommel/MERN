import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";

const NewAuthor = (props)=>{

    //create state variable for info collected
    //variable should match from models
    let[authorName, setAuthorName] = useState("")
    // let[numBelts, setNumBelts] = useState(null)
    // let[isVeteran, setIsVeteran] = useState(false)

    //state variables store any validation error coming from the backend
    let[formErrors, setFormErrors] = useState({})

    //this allows for use to resubmit to a route with different forms?
    const history = useHistory();

    const createAuthorSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(authorName)

        //put the info from FORM into an object send one thing to backend API
        //keys and variable have same name from models and from state variable on line 7 thru 10 and from NinjaSchema in models are same
        let formInfoObj = {authorName};

        axios.post("http://localhost:8000/", formInfoObj) //can get from POSTMAN too
            .then(res=>{
                console.log("response after posting", res)

                //if the res.data.results key is there, then form validations were valid
                //if the res.data.error key is there, then form not fill out correctly
                if(res.data.error){ //validation errors happened
                    setFormErrors(res.data.error.errors)
                }else{
                    //update the newAuthor variable so that it triggers
                    // props.setAuthorName(!props.authorName)
                    history.push("/")

                }
            })
            .catch(err=>console.log("error", err))

    }

    return(
        <div>
            <form onSubmit= {createAuthorSubmitHandler}>
                <div className="form-group" button type="button" button class="btn btn-secondary">
                <label htmlFor="">Author Name</label>
                <input  onChange = {(e) =>{setAuthorName(e.target.value)}} type="text" name=""/>
                <p className="text-danger">{formErrors.authorName? formErrors.authorName.message : ""}</p> 
                </div>
                {/* <div className="form-group">
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
                </div> */}
                <Link to ="/"><button class="btn btn-primary">Cancel</button></Link>
                <button class="btn btn-primary">Submit</button>
                {/* <input type="submit" value="Create Author!" className="btn btn-success mt-3" /> */}
            </form>
            
        </div>
    )
}

export default NewAuthor;