import React, { Component } from 'react';

    
class MenuItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            likes: this.props.likes
        };
    }
    
    
        render() {
        let clickHandler = ()=>{
            console.log("hi");
            alert("You clicked it!")
            // State variables will allow each like to increase independently
            this.setState({likes: this.state.likes+1})
        }


    // let {food, price} = this.props (having issues with this line)

    return <div>
    {/* <h2>{food}</h2> */}
    <h2>Food: {this.props.food}</h2>
    <p>Price: {this.props.price} </p>
    {this.props.children}
    <p>Description: Tasty but not filling</p>
    <p>Number of likes: {this.state.likes}</p>
    <button onClick = {clickHandler}>Like Handler</button>
    <button onClick = {()=>alert("Clicked button")}>Button {this.props.food}</button>
    {/* console.log("button pressed")}>Like</button> */}
    
    </div>;

    }
}
    
export default MenuItem;
