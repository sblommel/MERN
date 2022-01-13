import React, {Component} from 'react';

class PersonInfo extends Component{
    render() {
        return <div>
            <h2>Name: {this.props.fname}{this.props.lname}</h2>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hair}</p>


        </div>
    }
}

export default PersonInfo;