import React, { useState } from 'react';

const Pokemon = ()=>{

    let [listOfPokemon, setListOfPokemon] = useState ([])

    const getPokemon = ()=>{
        console.log("You clicked this button");

        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
        .then(response=>{
            return response.json() //convert this response to json, which is something that Javascript can understand

        })

        .then(response=>{
            console.log("Response after formatting json", response)
            setListOfPokemon(response.results)
        })

        .catch(err=>{
            console.log("error", err)
        })
    }

    return(
        <>
        <h3>Catch'em All!</h3>
        <p><button onClick = {getPokemon}>Fetch Pokemon</button></p>
        
        {
            listOfPokemon.map((pokemonObj, i)=>{
                return(
                    <div key = {i}>
                        <h3>{pokemonObj.name}</h3>

                    </div>
                )

            })
        }

        </>
    )
}

export default Pokemon;