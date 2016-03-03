import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'

import routes from '../router'
import DevTools from './DevTools';

export default class AppRoot extends React.Component {
	constructor(props) {
		super(props)
		this.displayName = 'AppRoot'
	}
	render() {
		const { store } = this.props
		return (
			<Provider store={store}>
				<div>
					<Router history={browserHistory} routes={routes}/>
					<DevTools />
				</div>
			</Provider>
		);
	}
}

