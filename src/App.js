import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import { HomePage } from './pages';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
    </Switch>
  );
};

export default App;
