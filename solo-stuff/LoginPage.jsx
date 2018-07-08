import React from 'react';
import Form from './Form.jsx';

const LoginPage = props => (
  <div>
    <h1>Login</h1>
    <Form formRoute={'/login'} history={props.history} />
    <p>
      Need an account? Sign up{' '}
      <a href="#" onClick={() => props.history.push('/signup')}>
        here
      </a>
    </p>
  </div>
);

export default LoginPage;
