import React, { useState } from 'react';


const Menu = (props) => {

    let [likesCount, setLikesCount] = useState(0)

    let likeHandler = ()=>{
        // console.log (`like ${dish}`)
        setLikesCount(likesCount+1)

    }
    return(
        <div>
            <h1>{props.dish}</h1>
            <p>Price: {props.price} </p>
            <p>Likes(hard code): {props.likes}</p>
            <p>Likes(linked to button): {likesCount}</p>
            <p>{props.children}</p>
            <button onClick={()=>console.log(`like the ${props.dish}`)}>Like</button>
            <button onClick={likeHandler}>Like</button>


        </div>
    );
}

export default Menu;