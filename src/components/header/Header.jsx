import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//image
import { ReactComponent as Logo } from '../../assets/crown.svg';

//styles
import { HeaderStyles } from '../../styles';

//context
import { AuthContext } from '../../context/authContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  console.log(user);
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
        {user ? (
          <>
            {user.photoURL && (
              <span className='Profile-Image'>
                <img src={user.photoURL} alt={user.displayName} />
              </span>
            )}
            <p className='User'>Welcome, {user.displayName}</p>
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

export default Header;
