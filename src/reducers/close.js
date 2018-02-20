function close(state='', action) {
	switch(action.type) {
		case 'GOT_CLOSE':
			return action.close;
		case 'GOT_NEW':
			return '';
		default:
		 	return state;	
	}
}
export default close;