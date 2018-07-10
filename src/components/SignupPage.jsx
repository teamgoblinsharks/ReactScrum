import React from 'react';
import Form from './Form.jsx';

const SignupPage = props => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <Form formRoute={'/signup'} history={props.history} />
    </div>
  );
};

export default SignupPage;
