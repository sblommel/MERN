import React, { useState } from 'react';

const Crypto = ()=>{

    // create a state variable to store array and can loop thru array
    let [listOfCoins, setListOfCoins] = useState ([])

    const getCoins = ()=>{
        console.log ("You clicked button")

        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        // .then means what to do when we get get the response eventually
        .then(response =>{
            return response.json()
        })

        .then(response=>{
            console.log("Response after formatting it to json", response)
            setListOfCoins(response)
            // for Pokemon API it will be (response.results)
        })

        // .catch will run i there are any errors in the api when we get info back
        .catch(err => {
            console.log("error", err)
        })

    // console.log("1st console.log to print")

    }

    // fetch is a function that accepts an api endpoint and returns a promise. The response from API is undetermined. Promise is a pattern response when the amount of time is not known.
    

    return(
        <>
        <h3>Hello crypto</h3>
        <p><button onClick= {getCoins}>Click to get crypto data</button></p>

        {
            listOfCoins.map((coinObj, i)=>{
                return (
                    <div key = {i} style = {{border: "1px solid black"}}>
                        <h3>{coinObj.name}</h3>
                        <p>{coinObj.current_price}</p>
                        <img src={coinObj.image} alt=""/>
                    </div>
                )
            })
        }
        </>
    )

    
}


export default Crypto;





