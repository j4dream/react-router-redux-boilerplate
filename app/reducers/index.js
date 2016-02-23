import { combineReducers } from 'redux';
import { ADD_CAMPAIGN } from '../actions'

function campaigns(state=[], action) {
	switch (action.type) {
		case ADD_CAMPAIGN: 
			return [...state,
				{
					name: action.name,
					status: 'DRAFT'
				}
			];
		default:
			return state;
	}
}

const appReducers = combineReducers({
	campaigns
});

export default appReducers;