import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PublicRoute from './PublicRoute.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import LoginPage from '../components/LoginPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';
import Board from '../components/Board.jsx';

const history = createHistory();
export default class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute exact path="/" isAuthenticated={false} component={LoginPage} />
            <Route exact path="/" component={Board} />
            <PrivateRoute exact path="/dashboard" isAuthenticated={true} component={Board} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
