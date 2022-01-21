import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";


const StarWars = ()=>{

    let [categories, setCategories] = useState([])
    // let [listOfPeople, setListOfPeople] = useState ([])
    
    // state variable for each input in this form
    let[selectedCategory, setSelectedCategory] = useState("people")
    let[id, setId] = useState(null)

    // initialize useHistory so we can do redirects
    const history = useHistory ();

    

    // useEffect allows the page to call the API once, that way it does not do this continually
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
        
        .then(response=>{
            // always console.log here
        console.log("Response from API", response)
        // Line 28 gives an array of the keys b/c response.data has categories as keys
        console.log(Object.keys(response.data)) 
                setCategories(Object.keys(response.data))
                // setListOfPeople(response.data.results)
                
            })
    
            .catch(err=>{
                console.log("error", err)
            })


            },[])
            // we have to have the brackets and closing parentheses tag that way if we want the submit button to call the API again.

            //function to run when the form submits
            const handleFormSubmit = (e)=>{
                e.preventDefault();
                console.log ("submit")
                history.push(`/${selectedCategory}/${id}`)
            }

    
    // const getPlanet = ()=>{
    //     console.log("You clicked this button");
    
        
    //                 axios.get("https://swapi.dev/api/planets/")
            
    //             .then(response=>{
    //             console.log("Response from API", response)
    //             setListOfPlanet(response.data.results)
                
    //         })
    
    //         .catch(err=>{
    //             console.log("error", err)
       

    return(
        <div>
            <form onSubmit = {handleFormSubmit}className= 'd-flex justify-content-between'>
                <div className="form-group">    
                <label htmlFor="">Search</label>    
                <select onChange = {(e)=>{setSelectedCategory(e.target.value)}} class="form-select">
                                
                
                    {
                    categories.map((category, i)=>{
                    return(
                    <option key = {i} value={category}>{category}</option>
                    )
                })
                }
                </select>
                </div>

            <div className= "form-group">
            <label htmlFor = "">Search by ID</label>    
            <input onChange = {(e)=>{setId(e.target.value)}} type = "number" name="" id="" className="form-control" placeholder='enter id number' />
            
            </div>
            {/* this is the search button on line 109 */}
            <input type="submit" value="Search!" className="btn btn-success" />
            </form>
            
        </div>

                /* {
            listOfPeople.map((starwarsObj, i)=>{
                return(
                    <div key = {i}>
                        <h3>{starwarsObj.name}</h3>
                        <p>Gender:{starwarsObj.gender}, Age: {starwarsObj.birth_year} 
                    </div>
                )
            })
        } */


    );    

};

export default StarWars;