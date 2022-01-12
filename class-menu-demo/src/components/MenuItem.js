import React, { Component } from 'react';
    
    
class MenuItem extends Component {
    render() {
    //let {food, price} = this.props

        return <div>
    <h2>Food: {this.props.food}</h2>
    <p>Price: {this.props.price} </p>
    <p>Description: Tasty but not filling</p>
    <p>Number of likes: 2</p>
</div>;

    }
}
    
export default MenuItem;
