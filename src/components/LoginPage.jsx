import React from 'react';
// import { connect } from 'react-redux';
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
          axios.get('/login').then(res => console.log(res));
/*           props.history.push('/secret') */
        }}
      >
        Login with GitHUb
      </button>
    </div>
  </div>
);

export default LoginPage;
// export default connect()(LoginPage);
