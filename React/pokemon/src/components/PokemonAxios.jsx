import React, { useState } from 'react';
import axios from 'axios';

const PokemonAxios = ()=>{

    let [listOfPokemon, setListOfPokemon] = useState ([])

    const getPokemon = ()=>{
        console.log("You clicked this button");

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
        
            .then(response=>{
            console.log("Response from API", response)
            setListOfPokemon(response.data.results)
            // With axios need only 1 .then statement and we have to have response.data as well.
        })

        .catch(err=>{
            console.log("error", err)
        })

        // axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
        
        //     .then(function(response){
        //     console.log("Response from API", response.data)
        //     setListOfPokemon(response.data.results)
        //     // With axios need only 1 .then statement and we have to have response.data as well.
        // })

        // .catch(err=>{
        //     console.log("error", err)
        // })
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

export default PokemonAxios;