import { FETCH_INFO } from '../constants/index.js';

const initialState= {
	userInfo : {}
}

const reducer= function(state = initialState, action) {
	switch (action.type){
		case FETCH_INFO :
			return Object.assign({}, state, { userInfo : action.userInfo });
		default : 
			return state;
	}
} 

export default reducer;