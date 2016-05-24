import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../containers/Layout';
import Home from '../components/Home';
import Campaigns from '../containers/campaigns';

export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home}/>
		<Route path="/campaigns" component={Campaigns}/>
	</Route>
);