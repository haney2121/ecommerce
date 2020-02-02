import React from 'react';

import { ButtonStyles } from '../styles';

const Button = ({ children, ...otherProps }) => {
  return <ButtonStyles {...otherProps}>{children}</ButtonStyles>;
};

export default Button;
