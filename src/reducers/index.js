import {combineReducers} from 'redux';
import SymbolReducer from './symbol';
import SymbolsReducer from './symbols';
import StartDateReducer from './startdate';
import EndDateReducer from './enddate'
import MessageReducer from './message';
import DataReducer from './data';
import VisibleReducer from './visible';

const reducers = combineReducers({
	symbols: SymbolsReducer,
	symbol: SymbolReducer,
	startDate: StartDateReducer,
	endDate: EndDateReducer,
	message: MessageReducer,
	data: DataReducer,
	visible: VisibleReducer
});

export default reducers;