import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, SignUp, Login } from '../pages';
import { Navbar } from '../components';

export const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUp',
    exact: true,
    component: SignUp,
  },
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: Login,
  },
];

const Routes: React.FC = () => (
  <Router>
    <Navbar />
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </Router>
);

export default Routes;
