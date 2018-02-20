import {combineReducers} from 'redux';
import SymbolReducer from './symbol';
import SymbolsReducer from './symbols';
import StartDateReducer from './startdate';
import EndDateReducer from './enddate'
import OpenReducer from './open';
import CloseReducer from './close';
import HighReducer from './high';
import LowReducer from './low';
import MessageReducer from './message';
import SmaReducer from './sma';

const reducers = combineReducers({
	symbols: SymbolsReducer,
	symbol: SymbolReducer,
	startDate: StartDateReducer,
	endDate: EndDateReducer,
	open: OpenReducer,
	close: CloseReducer,
	high: HighReducer,
	low: LowReducer,
	sma: SmaReducer,
	message: MessageReducer
});

export default reducers;