import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LogIn from '../pages/LogIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={LogIn} />
  </Switch>
);

export default Routes;
