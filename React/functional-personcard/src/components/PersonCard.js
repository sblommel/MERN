import React from 'react'

const Person = (props) =>{
    return(
        <div>
            <h2>Name: {props.fname}{props.lname}</h2>
            <p>Age: {props.age}</p>
            <p>Hair color: {props.hair} </p>


        </div>

    );


}

export default Person;