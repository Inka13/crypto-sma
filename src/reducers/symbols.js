function symbols(state=[], action) {
	switch(action.type) {
		case 'GOT_SYMBOLS':
			return action.symbols;
		default:
		 	return state;	
	}
}
export default symbols;