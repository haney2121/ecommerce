import React from 'react';

import { ButtonStyles } from '../styles';

const Button = ({ children, googleLogin, ...otherProps }) => {
  return (
    <ButtonStyles className={googleLogin && `Google-Login`} {...otherProps}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
