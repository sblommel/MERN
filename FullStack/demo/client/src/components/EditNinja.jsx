import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const EditNinja = () => {

    //get the route param info containing the id of the object we want to edit
    const { id } = useParams();

    //state variable to save info we get back from api about one ninja
    let [ninjaInfo, setNinjaInfo] = useState ({
        firstName:"",
        lastName:"",
        numBelts:0,
        isVeteran: false
    })

    useEffect(()=>{
        //make an axios call to get information from the backend about one ninja using the api endpoint to get one ninja
        axios.get(`http://localhost:8000/api/ninjas/${id}`)
        .then(res=>{
            console.log("response is this", res)
            setNinjaInfo(res.data.results)
        })
        .catch(err=> console.log(err))
    
    }, [])
    
    
    //initialize useHistory so we can redirect after the update of the form
    const history = useHistory();

    //changehandler that will be called each time the form info is being changed
    const changeHandler = (e)=>{
        
        console.log("changed in form detected!!")
        if(e.target.type === "checkbox"){
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name]: e.target.value
            })

        }
    }
    

    const updateNinjaSubmitHandler = (e)=>{
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/ninjas/${id}`, ninjaInfo)
            .then(res=>{
                console.log("response put request", res)
                history.push("/")
            })
            .catch(err=>console.log("error in submitting post request",err))  

    }

    return (
        <div>
            <h4>Edit Ninja Below</h4>
            <form onSubmit = {updateNinjaSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" id="" className="form-control" value={ninjaInfo.firstName} onChange={changeHandler} />
                </div>
                <div className="form-group">
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
                    <button>Updated Ninja</button>
                </div>
                
            </form>
        </div>
    );
};

export default EditNinja; 

