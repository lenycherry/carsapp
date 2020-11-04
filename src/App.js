import React, { Component } from 'react';
import Mycars from './components/Mycars';
import Form from './components/Form';
import './App.css';


class App extends Component {

 

  render() {
    return (
      <div className="App">
        <Mycars/>
        <Form />
      </div>
    );
  }

}

export default App;
