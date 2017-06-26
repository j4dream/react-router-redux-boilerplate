import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Campaigns from '../containers/campaigns';

const RouteComponents = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path="/campaigns" component={Campaigns}/>
  </Switch>
);

export default RouteComponents;
