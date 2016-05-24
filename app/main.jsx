import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './containers/AppRoot';
import configureStore from './store/configureStore';

let store = configureStore();

ReactDOM.render(
	<AppRoot store={store}/>,
	document.body.appendChild(document.createElement('div'))
);
