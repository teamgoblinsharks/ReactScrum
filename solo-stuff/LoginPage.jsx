import React from 'react';
import Form from './Form.jsx';
import axios from 'axios';

const LoginPage = props => (
  <div className="login-page">
    <h1 className="login-title">Welcome to Scrum Didilyumptious!</h1>
    <Form formRoute={'/login'} history={props.history} />
    <p>
      Need an account? Sign up{' '}
      <a href="#" onClick={() => props.history.push('/signup')}>
        here
      </a>
      <button onClick={() => {
        axios.get(`https://github.com/login/oauth/authorize?client_id=8f7d91a63f56cb8593fd&redirect_uri=http://localhost:3000/git`).then(res => console.log(res))
      }}> Login with github</button>
    </p>
  </div>
);

export default LoginPage;
