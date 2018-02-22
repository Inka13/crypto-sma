import React from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


class Charts extends React.Component {
    
    shouldComponentUpdate = (nextProps) => {
    	return this.props.data!==nextProps.data || this.props.visible!==nextProps.visible;
    }
    
   render() {
   	
	return (
		<div id="chart">
			<LineChart width={window.innerWidth - 100} height={400} data={this.props.data}>
  				{this.props.visible.indexOf('sma20')!==-1 ? <Line type="monotone" dataKey="sma20" stroke="teal" /> : <span/>}
  				{this.props.visible.indexOf('sma50')!==-1 ? <Line type="monotone" dataKey="sma50" stroke="purple" /> : <span/>}
  				{this.props.visible.indexOf('sma100')!==-1 ? <Line type="monotone" dataKey="sma100" stroke="orange" /> : <span/>}
  				{this.props.visible.indexOf('sma200')!==-1 ? <Line type="monotone" dataKey="sma200" stroke="yellow" /> : <span/>}
  				{this.props.visible.indexOf('high')!==-1 ? <Line type="monotone" dataKey="high" stroke="green" /> : <span/>}
				{this.props.visible.indexOf('open')!==-1 ? <Line type="monotone" dataKey="open" stroke="olive" /> : <span/>}
  				{this.props.visible.indexOf('close')!==-1 ? <Line type="monotone" dataKey="close" stroke="red" /> : <span/>}
  				{this.props.visible.indexOf('low')!==-1 ? <Line type="monotone" dataKey="low" stroke="brown" /> : <span/>}
  				<CartesianGrid stroke="#404040" strokeDasharray="5 5"/>
  				<XAxis dataKey="time" stroke="#ddd"/>
  				<YAxis stroke="#ddd"/>
  				<Tooltip />
			</LineChart>
					
				
		</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        startDate: state.startDate,
        data: state.data,
        visible: state.visible
    };
}
export default connect(mapStateToProps)(Charts);