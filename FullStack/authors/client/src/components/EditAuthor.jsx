import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const EditAuthor = () => {

    //get the route param info containing the id of the object we want to edit
    const { id } = useParams();

    //state variable to save info we get back from api about one author
    let [authorInfo, setAuthorInfo] = useState ({
        authorName:"",
        
    })

    //state variables store any validation error coming from the backend
    let[formErrors, setFormErrors] = useState({})

    useEffect(()=>{
        //make an axios call to get information from the backend about one author using the api endpoint to get one author
        axios.get(`http://localhost:8000/${id}`)
        .then(res=>{
            console.log("response is this", res)
            setAuthorInfo(res.data.results)
                        
        })
        .catch(err=> console.log(err))
    
    }, [])
    
    
    //initialize useHistory so we can redirect after the update of the form
    const history = useHistory();

    //changehandler that will be called each time the form info is being changed
    const changeHandler = (e)=>{
        
        console.log("changed in form detected!!")
        if(e.target.type === "checkbox"){
            setAuthorInfo({
                ...authorInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setAuthorInfo({
                ...authorInfo,
                [e.target.name]: e.target.value
            })

        }
    }
    

    const updateAuthorSubmitHandler = (e)=>{
        e.preventDefault();
        
        axios.put(`http://localhost:8000/${id}`, authorInfo)
            .then(res=>{
                console.log("response put request", res)
                if(res.data.error){ //validation errors happened
                    setFormErrors(res.data.error.errors)
                }else{
                    //only need the if/else statement for validation errors
                    //.push will update the new info
                    history.push("/")
                    
                }
                
                
                
            })
            .catch(err=>console.log("error in submitting post request",err))  

    }

    return (
        <div>
            <h4>Edit Author</h4>
            <form onSubmit = {updateAuthorSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Author Name</label>
                    <input type="text" name="authorName" id="" className="form-control" value={authorInfo.authorName} onChange={changeHandler} />
                    <p className="text-danger">{formErrors.authorName? formErrors.authorName.message : ""}</p>
                    <button>Submit</button>
                </div>
                {/*<div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" id="" className="form-control" value={ninjaInfo.lastName} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Belts</label>
                    <input type="number" name="numBelts" id="" className="form-control" value={ninjaInfo.numBelts} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Ninja a Veteran?</label>
                    <input type="checkbox" name="isVeteran" id="" className="form-checkbox" checked={ninjaInfo.isVeteran} onChange={changeHandler}/> 
                 </div>  */}
                
            </form>
        </div>
    );
};

export default EditAuthor; 

