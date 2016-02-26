import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Layout';
	}
	render() {
		return (
			<main>
				<header>
					<Link to="/" activeStyle={{ color: 'red' }} onlyActiveOnIndex>Home</Link>
					<Link to="/campaigns" activeStyle={{ color: 'red' }}>Campaigns</Link>
					<span>...Header</span>
				 </header>
					{this.props.children}
				<footer>
					<Link to="/" activeStyle={{ color: 'red' }} onlyActiveOnIndex>Home</Link>
					<Link to="/campaigns" activeStyle={{ color: 'red' }}>Campaigns</Link>
					<span>...Footer</span>
				</footer>
			</main>
		);
	}
}

export default Layout;
