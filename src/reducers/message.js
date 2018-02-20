function message(state='', action) {
	switch(action.type) {
		case 'GOT_MESSAGE':
			return action.message;
		default:
		 	return '';	
	}
}
export default message;