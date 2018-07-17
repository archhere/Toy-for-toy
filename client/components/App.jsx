import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import cookie from 'react-cookies';
import LoginFormContainer from './session/loginform_container';
import SignupFormContainer from './session/registerform_container';
import NavbarContainer from './navbar/navbarcontainer';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <ProtectedRoute path="/" component={NavbarContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

    </div>

  );
};

export default App;
