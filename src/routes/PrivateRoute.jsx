import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selectors';
import { WithSpinnerStyles } from '../styles';

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => {
  if (!rest.loading) {
    return (
      <Route
        {...rest}
        render={(props) =>
          currentUser ? <Component {...props} /> : <Redirect to='/login' />
        }
      />
    );
  }
  return <WithSpinnerStyles />;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(PrivateRoute);
