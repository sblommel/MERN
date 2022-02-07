import React from 'react';
import {useParams} from "react-router";

const Hello = ()=>{
    const {word} = useParams();

    return(
        <div>
        <h1>Hello: {word}</h1>
        </div>
    );
};

export default Hello;