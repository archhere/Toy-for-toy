import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute,AuthspecialRoute, ProtectedRoute } from '../util/route_util';
import cookie from 'react-cookies';
import LoginFormContainer from './session/loginform_container';
import SignupFormContainer from './session/registerform_container';
import NavbarContainer from './navbar/navbarcontainer';
import ToyIndexContainer from './toys/toyIndex_container';
import Footer from './footer';
import Modal from './modal/modal';
import Slider from './slider';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => {
  // console.log("appstate", state);
  // console.log(state.auth.authenticated);
  // let value;
  // if (state.auth.authenticated){
  //   value = <AuthRoute exact path="/login" component={LoginFormContainer} />;
  // } else{
  //   value = "";
  // }

  return (
    <div>
      <Modal />
      <header>

      <NavbarContainer/>
      <AuthRoute path="/" component={Slider}/>
      <AuthspecialRoute exact path="/login" component={LoginFormContainer} />
      </header>

      <Switch>

        <ProtectedRoute exact path="/" component={ToyIndexContainer} />


      </Switch>


    <footer>
      <Footer/>
    </footer>
    </div>
  );
};

export default App;
