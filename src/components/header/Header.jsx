import React from 'react';
import { Link } from 'react-router-dom';

//image
import { ReactComponent as Logo } from '../../assets/crown.svg';

//styles
import { HeaderStyles } from '../../styles';

const Header = () => {
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
        <Link className='Option' to='/login'>
          LOGIN
        </Link>
      </div>
    </HeaderStyles>
  );
};

export default Header;
