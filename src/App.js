import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Datepick from './Datepick';
import Calculate from './Calculate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui inverted fixed menu">
          <Dropdown />
          <Datepick name={"start"} />
          <Datepick name={"end"} />
          <Calculate />      
        </div>
      </div>
    );
  }
}

export default App;
