import { FETCH_INFO } from '../constants/index.js';
const initialState = {}

export default (state = initialState, action) => {
    switch(action.type){
        
				case FETCH_INFO:
            return Object.assign({}, state, { userInfo : action.userInfo });   
 				
				default:
            return state;
    }
}