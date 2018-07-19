import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, register, clearErrors } from '../../actions/session_action';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.profile.user,
    errors: state.auth.error,
    formType: 'Signup',
    navLink: <Link to='/login'>Log In</Link>
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  processForm: user => dispatch(register(user)),
  clearForm: () => dispatch(clearErrors([])),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
