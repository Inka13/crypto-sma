import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { setMessage, calculateSMA } from '../actions/index';

class Calculate extends React.Component {
    
    calculate = () => {
        if(this.props.startDate && this.props.endDate && this.props.symbol) {
            if(Number(this.props.startDate) > Number(this.props.endDate)) this.props.setMessage("Start date is after end date, please correct this!");
            else {
                let days = (Number(this.props.endDate) - Number(this.props.startDate)) / (60*60*24);
                //console.log(days);
                this.props.calculateSMA(this.props.symbol, this.props.endDate, days);
            }
        } else {

            this.props.setMessage("Please select both dates and currency!");
        }
    }
    render() {
        return (
                <div className="ui left floated button" onClick={() => this.calculate()}>
                  Calculate
                </div>
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setMessage, 
        calculateSMA
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        startDate: state.startDate,
        endDate: state.endDate,
        symbol: state.symbol
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(Calculate);