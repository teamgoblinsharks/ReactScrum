import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import { startLogin } from '../actions/auth';

const LoginPage = props => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">MOCKBUSTER</h1>
      <h5>Can you smell the stale popcorn and old candy?</h5>
      <h5>Be magically whisked away to the 90s</h5>
      <button
        className="button"
        onClick={() => {
          //probably in approuter or index.js
          // get users from databse with axios call
          // thunk users to store
          // when a user clicks on login
          // is user is signing in with info:
          //search store for that user data,
          //if found, change state of user to logged in, push to dashboard page
          //wait for the authentication response, if response succeeds, search store for related info, change status to logged in, push to dashboard

          axios.get('http://localhost:3000/login/brendan').then(res => {
            if (res.length) 
            console.log(res);
          });
        }}
      >
        Login with GitHUb
      </button>
    </div>
  </div>
);

export default connect()(LoginPage);
