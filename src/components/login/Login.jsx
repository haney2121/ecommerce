import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//components
import { FormInput, Button } from '../index';

//hook
import { useForm } from '../../hooks';

//styles
import { LoginStyles } from '../../styles';

//redux
import { setCurrentUser } from '../../redux/user/user.actions';

//firebase
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';
import { createUserProfileDocument } from '../../firebase/firebase.functions';

const Login = ({ setCurrentUser }) => {
  const [formData, setFormData] = useForm({ email: '', password: '' });

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          let userInfo = { ...snapShot.data(), id: snapShot.id };
          setCurrentUser(userInfo);
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      //closes subscrition
      auth.onAuthStateChanged();
    };
  }, [setCurrentUser]);

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
        <div className='Buttons'>
          <Button type='submit' form='login'>
            SIGN IN
          </Button>
          <Button googleLogin onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </LoginStyles>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(Login);
