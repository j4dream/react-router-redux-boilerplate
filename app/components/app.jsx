import React from 'react';
import {createStore} from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {Provider} from 'react-redux';

import appReducers from '../reducers'

import Layout from './layout'
import Home from './home';
import Campaigns from '../containers/campaigns'

let store = createStore(appReducers);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="/campaigns" component={Campaigns}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}
