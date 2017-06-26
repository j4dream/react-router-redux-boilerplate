import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Layout from './containers/Layout';

import routes from './router';

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter children={Layout} />
	</Provider>,
	document.body.appendChild(document.createElement('div'))
);
