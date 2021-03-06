import React, { Component } from 'react';
import { Calendar } from 'react-date-range';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { setDate } from '../actions/index';

class Datepick extends Component {
	handleSelect = (date) => {
        const d = (new Date(date._d.toString().substring(0, 15))).getTime()/1000; 
		//console.log(d); 
        this.props.name==="Start" ? this.props.setDate(d, "start") : this.props.setDate(d, "end");
	}

	render(){
		return (
			<div className="date">
				<Calendar style={{background: '#404040', color: '#ddd'}}
					onInit={this.handleSelect}
					onChange={this.handleSelect}
				/>
			</div>
		)
	}
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setDate
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Datepick);