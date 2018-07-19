import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  console.log("state",state);
  return(
    { loggedIn: state.auth.authenticated }
  );

};

const Authspecial = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
    !loggedIn ? <div/> : <Redirect to="/" />
  )} />
);

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
    !loggedIn ? <Component {...props} /> : <Redirect to="/" />
  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
    loggedIn ? <Component {...props} /> : <Redirect to="/login" />
  )} />
);


export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const AuthspecialRoute = withRouter(connect(mapStateToProps, null)(Authspecial));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
