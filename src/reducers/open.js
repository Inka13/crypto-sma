function open(state='', action) {
	switch(action.type) {
		case 'GOT_OPEN':
			return action.open;
		case 'GOT_NEW':
			return '';
		default:
		 	return state;	
	}
}
export default open;