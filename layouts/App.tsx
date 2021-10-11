import Deatil from '@pages/Detail';
import Home from '@pages/index';
import Main from '@pages/Main';
import React, { FC } from 'react';
import { Route, Switch } from 'react-router';

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail" component={Deatil} />
    </Switch>
  );
};

export default App;
