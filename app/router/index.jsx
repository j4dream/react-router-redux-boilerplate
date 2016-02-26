import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {Provider} from 'react-redux'

import Layout from '../components/layout'
import Home from '../components/home'
import Campaigns from '../containers/campaigns'

import configureStore from '../store/configureStore'

let store = configureStore()

export default class AppRouter extends React.Component {
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
    )
  }
}
