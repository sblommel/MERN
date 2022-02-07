import React, {useState} from 'react';
import styles from './Ninja.module.css';

const Ninja =()=>{
    
    let [ninjaName, setNinjaName]  = useState("");
    let [imageurl, setImageUrl] = useState("");
    let [favColor, setFavColor] = useState("");

    // this state variable to toggle their graduation status
    let [graduated, setGraduated] = useState(false)

    // let listOfNinjas = [];
    // create state variable for every ninja
    //for state variable need set list of ninjas
    let [listOfNinjas, setListOfNinjas] = useState([]);
    
    const createNinja = (e)=>{
        e.preventDefault();
        // line 15 prevents page from reloading.
        console.log("form submitted!");
        let ninjaObj = {ninjaName:ninjaName, imageurl:imageurl, favColor: favColor, graduated:graduated}
        console.log(ninjaObj);
        // ninjaObj is the information for the new ninja.

        setListOfNinjas([...listOfNinjas,ninjaObj])
        // Need list of Ninjas to keep all ninjas, so wont override the ... gives a copy of the array.
    } 
    
    // toggle graduation for student
    const toggleGraduation = (index)=>{
        console.log("Index of student", index)
        // update list of ninjas array at specific index of studennt and update the state with this new info
        let [...copyOfListOfNinjas] = listOfNinjas;
        // listOfNinjas[index].graduated = true;
        copyOfListOfNinjas[index].graduated =!copyOfListOfNinjas[index].graduated
        // console.log(listOfNinjas)
        // setListOfNinjas(copyOfListOfNinjas)


    }

    
    return (
    <>    
        <form onSubmit = {createNinja}>
            <div className="form-group">
                <label htmlFor="">Ninja name:</label>
                <input type="text" name="" id="" className="form-control" onChange = {(event)=>setNinjaName(event.target.value)}/>

            </div>
            <div className="form-group">
                <label htmlFor="">Image Url:</label>
                <input type="text" name="" id="" className="form-control" onChange = {(event)=>setImageUrl(event.target.value)}/>

            </div>
            
            <div className="form-group">
                <label htmlFor="">Favorite color:</label>
                <input type="text" name="" id="" className="form-control" onChange = {(event)=>setFavColor(event.target.value)}/>


            </div>
            <input type="submit" value="create ninja"/>
        </form>
         <hr />
         <h3>Here are our list of ninjas!</h3>

         {
             listOfNinjas.map((ninja, i)=>{
                 return (
                     <div key =  {i} className= {styles.ninja} style = {{backgroundColor: ninja.favColor, textDecoration: ninja.graduated? 'line-through': 'none'}}>
                         <h1>{ninja.ninjaName} Index : {i}</h1>
                         <p><img src={ninja.imageUrl} alt="" width= "100px"/></p>
                         <p>Favorite color: {ninja.favColor}</p>
                         <p><input type="checkbox" name="" id="" onClick = {()=>toggleGraduation(i)}/>Graduate</p>
                     </div>
                 )
             })
         }


         {/* {% for ninja in listofninjas %}
             {{ninja.ninjaName}}
         {% endfor %} */}

     </>

    )}  

export default Ninja;