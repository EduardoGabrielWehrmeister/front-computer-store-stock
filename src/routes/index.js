import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';
// import Employees from '~/pages/Employees';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route exact path="/home" component={Home} isPrivate />

      {/* <Route exact path="/employees" component={Employees} isPrivate /> */}
    </Switch>
  );
}
