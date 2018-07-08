import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import { startLogin } from '../actions/auth';
const gitUrl =
  'https://github.com/login/oauth/authorize?client_id=8f7d91a63f56cb8593fd&redirect_uri=http://localhost:3000/git';

const LoginPage = props => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">MOCKBUSTER</h1>
      <button
        className="button"
        onClick={() => {
          axios.get('http://localhost:3000/test').then(res => {
            if (!res.error) {
              props.history.push(`/test/${res.data._id}`);
            }
          });
        }}
      >
        Login
      </button>

      {/* EFFFFF THIIIIIISSSS

      <a href={gitUrl}>
        <button>Login with GitHUb</button>
</a>*/}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    prop: state.prop,
  };
};

export default connect()(LoginPage);
