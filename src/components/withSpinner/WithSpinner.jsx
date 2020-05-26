import React from 'react';

import { WithSpinnerStyles } from '../../styles';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <WithSpinnerStyles />
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
