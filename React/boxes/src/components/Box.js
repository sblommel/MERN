import React, {useState} from 'react';
import styles from './Box.module.css';

const Box = (props)=>{

    let [boxColor, setColor] = useState ("");

    let [listOfBoxes, setListOfBoxes] = useState([]);

    const createBox = (e)=>{
        e.preventDefault();
        // Prevent page for reloading line 8
        let boxObj = {boxColor:boxColor}

        setListOfBoxes([...listOfBoxes,boxObj])
    }

    return(
    <>
        <form onSubmit = {createBox}>
            <div clasName="form-group">
                <label htmlFor="">Box Color:<input type="text" name="" id="" className="form-control" onChange = {(event)=>setColor(event.target.value)}/> </label>
                
                
            </div>
            <input type="submit" value="Add box"/>
        </form>
        
        
        {
            listOfBoxes.map((box)=>{
                return (
                    <div className= {styles.box} style = {{backgroundColor: box.boxColor,}}>
                         <p>{box.boxColor}</p>
                         
                    </div>
                        
                )
            })
        }
        
    )

    </>        
    )}
    
