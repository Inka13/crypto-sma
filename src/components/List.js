import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { setActive } from '../actions/index';

class List extends React.Component {
    shouldComponentUpdate = (nextProps) => {
        return this.props.data!==nextProps.data;

    }
    
    createList = () => {
    	const list = [];
        
    	let date = this.props.startDate;
    	for (let set of this.props.data) {
    		list.push(<tr key={set.time}>
					      <td>{(new Date(Number(date) * 1000)).toDateString()}</td>
					      <td>{set.sma20}</td>
                          <td>{set.sma50}</td>
                          <td>{set.sma100}</td>
                          <td>{set.sma200}</td>
                          <td>{set.open}</td>
                          <td>{set.close}</td>
                          <td>{set.high}</td>
                          <td>{set.low}</td>
					    </tr>);
    		date += 60*60*24; 
        }
    	
    	return list;
    }
    render() {
        return (
                <table className="ui inverted celled table">
				  <thead>
				    <tr>
                    <th>Date</th>
				    <th><div onClick={() => {this.props.setActive('sma20')}} className="ui teal button">20 SMA</div></th>
                    <th><div onClick={() => {this.props.setActive('sma50')}} className="ui purple button">50 SMA</div></th>
                    <th><div onClick={() => {this.props.setActive('sma100')}} className="ui orange button">100 SMA</div></th>
                    <th><div onClick={() => {this.props.setActive('sma200')}} className="ui yellow button">200 SMA</div></th>
                    <th><div onClick={() => {this.props.setActive('open')}} className="ui olive button">Open</div></th>
                    <th><div onClick={() => {this.props.setActive('close')}} className="ui red button">Close</div></th>
                    <th><div onClick={() => {this.props.setActive('high')}} className="ui green button">High</div></th>
                    <th><div onClick={() => {this.props.setActive('low')}} className="ui brown button">Low</div></th>
				  </tr></thead>
				  <tbody>
				    {this.createList()}
				  </tbody>
				</table>
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
       setActive
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        startDate: state.startDate,
        data: state.data
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(List);