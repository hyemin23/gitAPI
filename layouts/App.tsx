import Deatil from '@pages/Detail';
import Home from '@pages/index';
import Main from '@pages/Main';
import Subscribe from '@pages/Subscribe';
import React, { FC } from 'react';
import { Route, Switch } from 'react-router';

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail" component={Deatil} />
      <Route exact path="/subscribe" component={Subscribe} />
    </Switch>
  );
};

export default App;
