function data(state=[], action) {
	switch(action.type) {
		case 'GOT_DATA':
			return action.data;
		default:
		 	return state;	
	}
}
export default data;