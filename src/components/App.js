import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Datepick from './Datepick';
import Calculate from './Calculate';
import List from './List';
import Charts from './Charts';
import './App.css';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div id="menu">
            <Dropdown />
            <div className="ui big label">
              Start:
            </div>
            <Datepick name={"Start"}/>
            <div className="ui big label">
              End:
            </div>            
            <Datepick name={"End"}/>
            <Calculate />
        </div>
        <div id="message">
          {this.props.message}
        </div>
        {this.props.data  ? <Charts /> : <span/>}
        {this.props.data ? <List /> : <span/>}

      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        startDate: state.startDate,
        endDate: state.endDate,
        message: state.message, 
        data: state.data
    };
} 
export default connect(mapStateToProps)(App);
