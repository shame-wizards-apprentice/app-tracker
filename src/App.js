import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Applications from './pages/Applications';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/login']}>
          <Login />
        </Route>
        <Route exact path={['/signup']}>
          <Signup />
        </Route>
        <Route exact path={['/Applications']}>
          <Applications />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
