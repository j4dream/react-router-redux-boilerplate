import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';

export default function configureStore() {
	const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(thunk),
			DevTools.instrument()	
		)
	)

	return store
}