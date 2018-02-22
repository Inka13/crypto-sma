function visible(state=[], action) {
	switch(action.type) {
		case 'GOT_DATA':
			return ['sma20', 'close'];
		case 'TOGGLE_LINE':
			if(state.indexOf(action.prop)!==-1){
				let newState = [...state];
				newState.splice(state.indexOf(action.prop), 1);
				return newState;
			} else return [...state, action.prop];
		
		default:
		 	return state;	
	}
}
export default visible;