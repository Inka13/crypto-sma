import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getAllSymbols, gotAllSymbols, setSymbol } from '../actions/index';

class Dropdown extends React.Component {
    componentWillMount = () => {
        let symbols = [];
        symbols = JSON.parse(localStorage.getItem('symbols', symbols)) || [];
        symbols.length > 0 ? this.props.gotAllSymbols(symbols) : this.props.getAllSymbols();
    }
    createList = () => {
    	const list = [];
    	this.props.symbols.forEach((sym, i) => {
    		let s = sym;
    		list.push(<div key={i} style={{'pointerEvents':'all'}} role="option" aria-checked="false" aria-selected="false" className="item" onClick={() => this.props.setSymbol(s)}>
                            <span className="text">{sym}</span>
                      </div>);
    	})
    	return list;
    }
    render() { 
        
        return (<div className="item">
                <div className="ui big grey inverted left compact menu">
                    <div role="listbox" aria-expanded="false" className="ui item simple dropdown" tabIndex="0">
                        <div className="text" role="alert" aria-live="polite">{this.props.symbol ? this.props.symbol : 'Currency'}</div>
                        <i aria-hidden="true" className="dropdown icon"></i>
                        <div id="dropdown" className="menu transition">
                          	{this.createList()}
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllSymbols, 
        gotAllSymbols,
        setSymbol
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        symbols: state.symbols,
        symbol: state.symbol
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(Dropdown);