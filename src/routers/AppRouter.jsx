import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PublicRoute from './PublicRoute.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import LoginPage from './LoginPage.jsx';
import NotFoundPage from './NotFoundPage.jsx';

import PrivatePage from './PrivatePage.jsx';

const history = createHistory();
export default class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute exact path="/" isAuthenticated={false} component={LoginPage} />
            <PrivateRoute exact path="/secret" isAuthenticated={false} component={PrivatePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// <PublicRoute path="/" component={LoginPage} exact={true} />
// <PrivateRoute exact path="/home" compononent={LoginPage} />
