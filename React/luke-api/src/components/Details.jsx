import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";
import axios from 'axios';

const Detail = ()=>{

    const { category, id } = useParams();

    let [info, setInfo] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
    .then(response=>{
        console.log ("Response from details info", response)
        setInfo(response.data)
    
    })
    .catch(err=>console.log(err))

},[category, id])

    return(
        
    <div>
        {
        category === "people"?
            <> 
            <p>Name: {info.name}</p>
            <p>Mass {info.mass}</p>
            <p>Height: {info.height}</p>
            <p>Gender: {info.gender}</p>
            </>
        : category === "planets"?
            <>
            <p>Name: {info.name}</p>
            <p>Climate: {info.climate}</p>
            <p>Terrain: {info.terrain}</p>
            <p>Population: {info.population}</p>
            </>
        : category === "starships"?
            <>
            <p>Name: {info.name}</p>
            <p>Model: {info.model}</p>
            <p>Starship class: {info.starship_class}</p>
            <p>Cost in Credits: {info.cost_in_credits}</p>
            </>
        : category === "species"?
        <>
        <p>Name: {info.name}</p>
        <p>Classification: {info.classifcation}</p>
        <p>Language: {info.language}</p>
        <p>Homeworld: {info.homeworld}</p>
        </> 
        : category === "vehicles"? 
        // vehicles not working due to API issues from site.
        <>
        <p>Name: {info.name}</p>
        <p>Classification: {info.model}</p> 
        </>  
        :
        <>
        <h3>This are not the droids you are looking for!</h3>
        <img src="https://www.denofgeek.com/wp-content/uploads/2021/06/star-wars-revenge-of-the-sith-obi-wan-lucasfilm.jpg?resize=768%2C432" alt="" />
        
        </>
            
    }

    </div>
);

};

export default Detail;