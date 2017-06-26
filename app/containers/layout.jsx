import React from 'react';
import { NavLink } from 'react-router-dom';
import RouteComponents from '../router';

export default (
  <main>
    <header>
      <NavLink to="/" activeStyle={{ color: 'red' }} >Home</NavLink>
      <NavLink to="/campaigns" activeStyle={{ color: 'red' }}>Campaigns</NavLink>
      <span>...Header</span>
    </header>
    <RouteComponents />
    <footer>
      <NavLink to="/" activeStyle={{ color: 'red' }}>Home</NavLink>
      <NavLink to="/campaigns" activeStyle={{ color: 'red' }}>Campaigns</NavLink>
      <span>...Footer</span>
    </footer>
  </main>
);
