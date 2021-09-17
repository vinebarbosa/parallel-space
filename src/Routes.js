import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Recover from './pages/Recover';
import Board from './pages/Board';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/recover" component={Recover} />
        <Route path="/config" component={Board} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
