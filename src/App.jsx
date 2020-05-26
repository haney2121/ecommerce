import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//components
import { Header } from './components';

//pages
import { HomePage, ShopPage, LoginPage, CheckoutPage } from './pages';

//route
import PrivateRoute from './routes/PrivateRoute';

//redux actions and selectors
import { setCurrentUser } from './redux/user/user.actions';

//firebase
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.functions';

import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({ setCurrentUser, currentUser }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          let userInfo = { ...snapShot.data(), id: snapShot.id };
          setCurrentUser(userInfo);
          setLoading(false);
        });
      } else {
        setLoading(false);
        setCurrentUser(null);
      }
    });
    return () => {
      //closes subscription
      auth.onAuthStateChanged();
    };
  }, [setCurrentUser]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <PrivateRoute loading={loading} path='/shop' component={ShopPage} />
        <PrivateRoute
          loading={loading}
          exact
          path='/checkout'
          component={CheckoutPage}
        />
        <Route
          exact
          path='/login'
          render={() => (currentUser ? <Redirect to='/' /> : <LoginPage />)}
        />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
