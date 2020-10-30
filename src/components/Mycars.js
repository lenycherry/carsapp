import React, { Component } from 'react';
import Car from './Cars'

class Mycars extends Component {
    render(){
  
        return (
        <div>
            <h1>{this.props.title}</h1>
            <Car color="red">Ford</Car>
            <Car>Mercedes</Car>
            <Car color='black'></Car>   
        </div>
        )
        
    }
}

export default Mycars;