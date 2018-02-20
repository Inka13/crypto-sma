import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Datepick from './Datepick';
import Calculate from './Calculate';
import List from './List';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div id="menu" className="ui menu">
            <Dropdown />
            <Datepick name={"start"}/>
            <Datepick name={"end"}/>
            <Calculate />
        </div>
        <div>
          {this.props.message}
        </div>
        {this.props.sma.length > 0 ? <List /> : <span/>}
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        startDate: state.startDate,
        endDate: state.endDate,
        message: state.message, 
        sma: state.sma
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(App);
