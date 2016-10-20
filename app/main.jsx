import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './router';

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.body.appendChild(document.createElement('div'))
);
