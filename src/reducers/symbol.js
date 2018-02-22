function symbol(state='', action) {
	switch(action.type) {
		case 'GOT_SYMBOL':
			return action.symbol;
		default:
		 	return state;	
	}
}
export default symbol;