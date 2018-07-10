// NOTE ************
//these aren't being used, but they should work if you hook them up. we just didn't have time.
//the 'isAuthenticated' variable is mislabeled. It should be based off of the user's id in the first param in react router
//and whether that user is logged into the database

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (
//   <Route
//     {...rest}
//     component={props => (isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />)}
//   />
// );

// const mapStateToProps = state => ({
//   isAuthenticated: false,
// });

// export default connect(mapStateToProps)(PublicRoute);
