import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import CreateStock from '../pages/createStock';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import User from '../pages/User';
import RecipientsRegister from '../pages/RegisterExample';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/products" component={Home} isPrivate />
      <Route exact path="/users" component={User} isPrivate />
      <Route exact path="/create-product" component={CreateStock} isPrivate />

      <Route exact path="/test" component={RecipientsRegister} isPrivate />
    </Switch>
  );
}
