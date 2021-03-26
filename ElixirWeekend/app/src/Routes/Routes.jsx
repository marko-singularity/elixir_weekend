import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../React/Home';

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;
