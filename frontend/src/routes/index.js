import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Route from './Route'

import Login from '../pages/Login';
import Register from '../pages/Register';
import Config from '../pages/Config';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/config" component={Config} isPrivate />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
