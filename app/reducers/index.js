import { combineReducers } from 'redux';
import campaigns from './campaigns';

const appReducers = combineReducers({
	campaigns
});

export default appReducers;