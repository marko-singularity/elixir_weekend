import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../React/Home';
import Login from "../React/Login";
import {Products} from "../React/Products"
import {Order} from "../React/Order"

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path ="/login" exact component={Login} />
      <Route path ="/products" exact component={Products} />
      <Route path ="/order" exact component={Order}/>
    </Switch>
  );
};

export default Routes;
