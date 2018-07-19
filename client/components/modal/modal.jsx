import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../../components/session/loginform_container';
import SignUpFormContainer from '../../components/session/registerform_container';

const Modal = (props) => {
  if (!props.modal){
    return null;
  }

  let component;
  switch(props.modal.modal.modal){
    case "login":
    component = <LoginFormContainer />;
    break;
    case 'signup':
    component = <SignUpFormContainer />;
    break;
    default:
    return null;
  }

  let modalStyle;
  if(props.modal === 'CreatePeg' || props.modal === 'CreateBoard'){
    modalStyle = {background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) )`};
  } else {
    modalStyle = {background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )`};
  }
  return (
      <div className="modal-background" style={modalStyle}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );

  };
  const mapStateToProps = (state) => {
      return {
        modal: state.modal,
      };
  };

  const mapDispatchToProps = (dispatch) => {
      return {
        closeModal: () => dispatch(closeModal()),
      };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Modal);
