function sma(state=[], action) {
	switch(action.type) {
		case 'GOT_SMA':
			return action.sma;
		case 'GOT_STARTDATE':
			return [];
		case 'GOT_ENDDATE':
			return [];
		default:
		 	return state;	
	}
}
export default sma;