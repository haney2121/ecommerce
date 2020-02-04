import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//image
import { ReactComponent as Logo } from '../../assets/crown.svg';

//styles
import { HeaderStyles } from '../../styles';

//firebase
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <HeaderStyles>
      <Link className='Logo-Container' to='/'>
        <Logo className='Logo' />
      </Link>
      <div className='Options'>
        <Link className='Option' to='/shop'>
          SHOP
        </Link>
        <Link className='Option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <>
            {currentUser.photoURL && (
              <span className='Profile-Image'>
                <img src={currentUser.photoURL} alt={currentUser.displayName} />
              </span>
            )}
            <p className='User'>Welcome, {currentUser.displayName}</p>
            <div className='Option' onClick={logout}>
              LOGOUT
            </div>
          </>
        ) : (
          <Link className='Option' to='/login'>
            LOGIN
          </Link>
        )}
      </div>
    </HeaderStyles>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
