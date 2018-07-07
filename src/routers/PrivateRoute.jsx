import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    component={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/" />)}
  />
);
