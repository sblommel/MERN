import React, { useState } from  'react';
    
    
const PetForm = (props) => {

    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [breed, setBreed] = useState("")
    // Step 1 create the state variable

    return(
        <div>
            <h1>Grooming Appointment</h1>
            <form action="">
            <div className="form-group">
                <label htmlFor="">Name:</label>
                {/* Step 2 attach an onchange event to the input and use setter of the state variable */}
                <input type="text" name="" id= "" className="form-control" onChange= {(event)=> setName(event.target.value)}/>
                {
                name.length < 2
                ?<p className="text-danger">At least have 2 letters in name. Current length {name.length}</p>:""
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Age:</label>
                <input type="text" name="" id= "" className="form-control" onChange= {(event)=> setAge(event.target.value)}/>
               {
                   age < 0 || age > 100?
               
                <p className="text-danger">Age between 0 to 100.</p>
                :""
                
               }
            </div>
            {/* Have to rework this section-watch video */}
            <div className="form-group">
                <label htmlFor="">Breed:</label>
                <input type="text" name="" id= "" className="form-control" onChange= {(event)=> setBreed(event.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Hair length:</label>
                <select name="" id= "" className= 'form-select'>
                <option value="">Hairless</option>
                <option value="">Short hair</option>
                <option value="">Long hair</option>
                </select>
            </div>
            <input type= "submit" value="Reserve appointment"/>
            </form>
            <hr/>
            <p>Pet Name: {name}</p>
            <p>Age: {age}</p>
            <p>Breed: {breed}</p>
            {/* Display state variable on bottom page */}


        </div>


    )
    
}

export default PetForm