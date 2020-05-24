import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//components
import CartIcon from '../cart/CartIcon';
import CartDropdown from '../cart/CartDropdown';

//image
import { ReactComponent as Logo } from '../../assets/crown.svg';

//styles
import { HeaderStyles } from '../../styles';

//redux actions and selectors
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

//firebase
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, cartHidden }) => {
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
            <div className='Option' onClick={logout}>
              SIGN OUT
            </div>
            <CartIcon />
          </>
        ) : (
          <Link className='Option' to='/login'>
            LOGIN
          </Link>
        )}
      </div>
      {!cartHidden && <CartDropdown />}
    </HeaderStyles>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
