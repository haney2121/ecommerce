import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import { HomePage, ShopPage, LoginPage } from './pages';
import { Header } from './components';

//route
import PrivateRoute from './routes/PrivateRoute';

//context
// import Auth from './context/authContext';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <PrivateRoute exact path='/shop' component={ShopPage} />
        <Route exact path='/login' component={LoginPage} />
      </Switch>
    </>
  );
};

export default App;
