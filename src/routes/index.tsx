import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Stocks from '../pages/Stocks';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/stocks" component={Stocks} />
    <Route path="/login" component={LogIn} />
  </Switch>
);

export default Routes;
