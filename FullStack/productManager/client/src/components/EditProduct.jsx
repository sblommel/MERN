import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const EditProduct = () => {

    //get the route param info containing the id of the object we want to edit
    const { id } = useParams();

    //state variable to save info we get back from api about one ninja
    let [productInfo, setProductInfo] = useState ({
        title:"",
        price:"",
        description:0,
        // firstName: "",
        // isVeteran: false
    })

    useEffect(()=>{
        //make an axios call to get information from the backend about one ninja using the api endpoint to get one ninja
        axios.get(`http://localhost:8000/${id}`)
        .then(res=>{
            console.log("response is this", res)
            setProductInfo(res.data.results)
        })
        .catch(err=> console.log(err))
    
    }, [])
    
    
    //initialize useHistory so we can redirect after the update of the form
    const history = useHistory();

    //changehandler that will be called each time the form info is being changed
    const changeHandler = (e)=>{
        
        console.log("changed in form detected!!")
        if(e.target.type === "checkbox"){
            setProductInfo({
                ...productInfo,
                [e.target.name]: e.target.checked
            })
        }else{
            setProductInfo({
                ...productInfo,
                [e.target.name]: e.target.value
            })

        }
    }
    

    const updateProductSubmitHandler = (e)=>{
        e.preventDefault();
        
        axios.put(`http://localhost:8000/${id}`, productInfo)
            .then(res=>{
                console.log("response put request", res)
                history.push("/")
            })
            .catch(err=>console.log("error in submitting post request",err))  

    }

    return (
        <div>
            <h4>Edit Product Below</h4>
            <form onSubmit = {updateProductSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" id="" className="form-control" value={productInfo.title} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price $:</label>
                    <input type="number" name="price" id="" className="form-control" value={productInfo.price} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" name="description" id="" className="form-control" value={productInfo.description} onChange={changeHandler} />
                    <button>Update Product</button>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="">Is Ninja a Veteran?</label>
                    <input type="checkbox" name="isVeteran" id="" className="form-checkbox" checked={ninjaInfo.isVeteran} onChange={changeHandler}/>
                </div> */}
                
                
            </form>
        </div>
    );
};

export default EditProduct; 

