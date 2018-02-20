import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class List extends React.Component {
    
    createList = () => {
    	const list = [];
    	let date = this.props.startDate;
    	this.props.sma.forEach((value, i) => {
    		list.push(<tr>
					      <td>{(new Date(Number(date) * 1000)).toDateString()}</td>
					      <td>{value}</td>
					    </tr>);
    		date += 60*60*24; 

    	});
    	return list;
    }
    render() {
        return (
                <table className="ui celled table">
				  <thead>
				    <tr><th>Date</th>
				    <th>20 SMA</th>
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
       
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        startDate: state.startDate,
        sma: state.sma
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(List);