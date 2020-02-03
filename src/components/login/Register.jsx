import React, { useState, useContext } from 'react';

//components
import { FormInput, Button } from '../index';

//hooks
import { useForm, useErrors } from '../../hooks';

//styles
import { RegisterStyles } from '../../styles';

//context
import { AuthContext } from '../../context/authContext';

const Register = props => {
  const { user } = useContext(AuthContext);
  const [errors, setErrors] = useErrors({
    display: false,
    message: ''
  });
  const [formData, setFormData] = useForm({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    if (formData.password != formData.confirmPassword) {
      setErrors({ display: true, message: 'Passwords must be the same.' });
    }
  };

  return (
    <RegisterStyles>
      <h2>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      {errors.display && <p className='Errors'>{errors.message}</p>}
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={setFormData}
          label='Display Name'
          name='displayName'
          type='text'
          value={formData.displayName}
          required
        />
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
        <FormInput
          handleChange={setFormData}
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          value={formData.confirmPassword}
          required
        />
        <Button type='submit'>SIGN UP</Button>
      </form>
    </RegisterStyles>
  );
};

export default Register;
