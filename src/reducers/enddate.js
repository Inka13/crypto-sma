function enddate(state='', action) {
	switch(action.type) {
		case 'GOT_ENDDATE':
			return action.date;
		default:
		 	return state;	
	}
}
export default enddate;