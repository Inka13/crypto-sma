import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import { } from '../actions/index';

class Datepick extends React.Component {
    
    render() {
        
        return (
                <div className="ui button">
                  
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
        
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(Datepick);