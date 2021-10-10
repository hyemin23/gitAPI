import Home from '@pages/index';
import Main from '@pages/Main';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
};

export default App;
