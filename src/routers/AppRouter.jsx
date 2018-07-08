import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// import PublicRoute from './PublicRoute.jsx';
// import PrivateRoute from './PrivateRoute.jsx';
// import LoginPage from '../components/LoginPage.jsx';
// import NotFoundPage from '../components/NotFoundPage.jsx';
// import Board from '../components/Board.jsx';
import Dashboard from '../components/Dashboard.jsx';


const history = createHistory();
export default class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}
