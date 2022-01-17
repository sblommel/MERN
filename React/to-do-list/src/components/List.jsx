import React, {useState} from 'react';
import styles from './List.module.css'

const Item = (props)=>{

    let [item, setItem] = useState ("");

    let [listOfItems, setListOfItems] = useState ([]);

    let [done, setDone] = useState(false);

    

    const createList = (e)=>{
        e.preventDefault();

        let listObj = {item:item, done: done}

        setListOfItems([...listOfItems,listObj])

        setItem("")
        // Line 21 is function where we clear out the previous tasks
        // Line 48 value {item} tells form to clear out to empty string.
    }

    const toggleDone = (index)=>{
        console.log("testing this function", index);
        let[...copyOfListOfItems] = listOfItems;
        copyOfListOfItems[index].done = !copyOfListOfItems[index].done
        console.log("Copied list", copyOfListOfItems)
        setListOfItems(copyOfListOfItems);
    }

    
    const Delete = (deleteIndex) =>{
        const filteredItem = listOfItems.filter((item, i)=>{ 
            // item.filter causing issues needed to change this to listofItems.filter
        return i !=deleteIndex;
        });
        
        setListOfItems(filteredItem);
        // Line 41 needs to be setter because we use State Function. 
    };    
    

    return(
    <>
        <form onSubmit = {createList}>
            <div className="form-group">
            <label htmlFor="">Item:<input type="text" name="" id="" value= {item} className="form-control" onChange = {(event)=>setItem(event.target.value)}/> </label>

            </div>
            <input type="submit" value="Add List Item"/>
        </form>
        <hr/>
        <h3>Here are your tasks!</h3>

        {
            listOfItems.map((item, i)=>{
                return(
                    <div key ={i} style={{textDecoration: item.done? 'line-through': 'none'}}>
                    
                    <p>{item.item}<input type="checkbox" name="" id="" onClick = {()=>toggleDone(i)} /><button onClick={()=>{Delete(i);}}>Delete</button></p>
                    <p></p>
                    </div>
                )



            })
        }
          
    
    
    
    </>    
    )
}

export default Item;

