import React from 'react';
import {useParams} from "react-router";

const Info = ()=>{
    const {id} = useParams();

    return(
        <div style = {{border: "1px solid black"}}>
            {/* { isNaN(id)?}  this is to get the person id or name for router*/}
            <h1>Person {id} </h1>
       </div>

    );

};

export default Info;