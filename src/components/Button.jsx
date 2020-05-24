import React from 'react';

import { ButtonStyles } from '../styles';

const Button = ({ children, googleLogin, inverted, ...otherProps }) => {
  return (
    <ButtonStyles
      width={otherProps.width}
      opacity={otherProps.opacity}
      position={otherProps.position}
      top={otherProps.top}
      className={`${inverted ? 'Inverted' : ''} ${
        googleLogin && 'Google-Login'
      }`}
      {...otherProps}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
