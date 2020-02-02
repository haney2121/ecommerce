import React from 'react';

//components
import { Login, Register } from '../components';

//styles
import { LoginPageStyles } from '../styles';

const LoginPage = () => {
  return (
    <LoginPageStyles>
      <Login />
      <Register />
    </LoginPageStyles>
  );
};

export default LoginPage;
