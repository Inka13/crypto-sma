function startdate(state='', action) {
	switch(action.type) {
		case 'GOT_STARTDATE':
			return action.date;
		default:
		 	return state;	
	}
}
export default startdate;