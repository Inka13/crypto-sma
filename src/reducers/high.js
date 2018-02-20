function high(state='', action) {
	switch(action.type) {
		case 'GOT_HIGH':
			return action.high;
		case 'GOT_NEW':
			return '';
		default:
		 	return state;	
	}
}
export default high;