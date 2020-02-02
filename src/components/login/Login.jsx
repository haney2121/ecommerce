import React from 'react';

//components
import { FormInput } from '../index';
import Button from '../Button';

//hook
import { useForm } from '../../hooks/useForm';

//styles
import { LoginStyles } from '../../styles';

const Login = () => {
  const [formData, setFormData] = useForm({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <LoginStyles>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form id='login' onSubmit={handleSubmit}>
        <FormInput
          handleChange={setFormData}
          label='Email'
          name='email'
          type='email'
          value={formData.email}
          required
        />
        <FormInput
          handleChange={setFormData}
          label='Password'
          name='password'
          type='password'
          value={formData.password}
          required
        />
        <Button text='LOGIN' form='login' />
      </form>
    </LoginStyles>
  );
};

export default Login;