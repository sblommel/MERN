import React, {Component} from 'react';

class PersonInfo extends Component{
    constructor (props){
        super(props);

        this.state = {
            age: this.props.age
        };

    }
    
    render() {
        let clickHandler = ()=>{
            console.log ("Hi");
            // State variables will allow each like to increase independently
            this.setState({age: this.state.age+1})
        }
    
    
        return <div>
            <h2>Name: {this.props.name}</h2>
            <p>Age: {this.state.age}</p>
            {/* The above line was replaced from this.props.age with this.state.age */}
            <p>Hair Color: {this.props.hair}</p>
            <button onClick = {clickHandler}>Birthday Button for {this.props.name} </button>

        </div>
    }
}



export default PersonInfo;