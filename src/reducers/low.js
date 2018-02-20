function low(state='', action) {
	switch(action.type) {
		case 'GOT_LOW':
			return action.low;
		case 'GOT_NEW':
			return '';
		default:
		 	return state;	
	}
}
export default low;