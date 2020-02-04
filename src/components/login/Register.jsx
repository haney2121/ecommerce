import React from 'react';
import { connect } from 'react-redux';

//components
import { FormInput, Button } from '../index';

//hooks
import { useForm, useErrors } from '../../hooks';

//firebase
import { auth } from '../../firebase/firebase.utils';

//styles
import { RegisterStyles } from '../../styles';

//context
// import { AuthContext } from '../../context/authContext';
import { createUserProfileDocument } from '../../firebase/firebase.functions';
import { setCurrentUser } from '../../redux/user/user.actions';

const Register = ({ setCurrentUser }) => {
  // const { setUser } = useContext(AuthContext);
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

    if (formData.password !== formData.confirmPassword) {
      setErrors({ display: true, message: 'Passwords must be the same.' });
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        formData.email,
        formData.password
      );

      await createUserProfileDocument(user, {
        displayName: formData.displayName
      });

      setCurrentUser(user);
    } catch (err) {
      setErrors({
        display: true,
        message: 'The user was unsuccessful in creation.'
      });
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(Register);
