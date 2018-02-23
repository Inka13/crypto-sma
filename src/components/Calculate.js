import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { setMessage, calculateSMA } from '../actions/index';

class Calculate extends React.Component {
    
    calculate = () => {

        // input validation and warning messages
        if(this.props.startDate && this.props.endDate && this.props.symbol) {
            const yesterday = (new Date()).getTime()/1000 - 60*60*24;
            
            if(+this.props.startDate > +yesterday || +this.props.endDate > +yesterday) this.props.setMessage("Please select date in the past not future!");
            else if(+this.props.startDate > +this.props.endDate) this.props.setMessage("Start date is after end date, please correct this!");
            else {
                let days = (+this.props.endDate -this.props.startDate) / (60*60*24);
                
                this.props.calculateSMA(this.props.symbol, this.props.endDate + 60*60*24, days);
            }
        } else {

            this.props.setMessage("Please select currency!");
        }
    }
    render() {
        return (
            <div className="ui item">
                <div className="ui big button" onClick={() => this.calculate()}>
                  Calculate
                </div>
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