import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import 'babel-polyfill';

import createHistory from 'history/createBrowserHistory';

// import LoginPage from '../components/LoginPage.jsx';
import LoginPage from '../../solo-stuff/LoginPage.jsx';
import SignupPage from '../../solo-stuff/SignupPage.jsx';
import DashboardPage from '../../solo-stuff/DashboardPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';

import Board from '../../solo-stuff/Board.jsx';



const history = createHistory();
export default class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/test/:id" component={DashboardPage} />
            <Route exact path="/test/:id/:board" component={Board} />
            <Route exact path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
