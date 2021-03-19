import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Header from './common/Header';
import Dashboard from './dashboard/Dashboard';
import NewAccount from './newAccount/NewAccount';

const Routing = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/main">
          <Dashboard />
        </Route>
        <Route exact path="/newAccount">
          <NewAccount />
        </Route>
        <Route exact path="*">
          <Redirect to="/main" />
        </Route>
      </Switch>
    </div>
  );
};

export default Routing;