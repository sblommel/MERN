import React from 'react';
import { useParams } from "react-router";

   
const Number = () => {
  const {id} = useParams();
    
  return (
    <h1>Number: {id}</h1>
  );
}

export default Number;