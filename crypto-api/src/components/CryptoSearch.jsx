import React, {useState, useEffect} from 'react';
import axios from 'axios';
const CryptoAxiosSearch = ()=>{
    //create a state variable to store the array of coins inside so that we can loop through this array and display each coin on the page
    let [listOfCoins, setListOfCoins] = useState([])

    let [clicked, setClicked] = useState(false)

    //state variable to keep track of search term thats being typed
    let [searchTerm, setSearchTerm] = useState('')

    //useEffect is used to tell the application what code to run initially upon the initial render of the component only. useEffect() takes in a callback function. 
    //A callback function is a function that is given as an input to another function. useEffect will run this call back function on the initial render of the component and thats it (unless otherwise indicated)
    
    useEffect(()=>{
	const CryptoCoins= ()=>{
            <div>
            <h3>Hello from crypto component</h3>
            <button onClick = {()=>setClicked(!clicked)}>Get new updated info!!</button>

            <p>Search A Coin: <input onChange = {(e)=>setSearchTerm(e.target.value)} type="text" name="" id="" placeholder='Search...'/></p>

            {
                listOfCoins.filter((coinObj,i)=>{
                    return coinObj.name.toLowerCase().includes(searchTerm.toLowerCase())
                }).map((coinObj, i)=>{
                    return (
                        <div key = {i} style = {{border: "1px solid black"}}>
                            <h3>{coinObj.name}</h3>
                            </div>
            };
            </div>
        }
        }
    }