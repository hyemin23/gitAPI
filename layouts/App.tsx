import MyPage from '@pages/MyPage';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

const App: FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/main" />
      <Route path="/mypage" component={MyPage} />
    </Switch>
  );
};

export default App;
