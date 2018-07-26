import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../../components/session/loginform_container';
import SignUpFormContainer from
'../../components/session/registerform_container';
import CreateLeaseContainer from
'../../components/lease/create_lease_container';

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
    case 'createLease':
    component = <CreateLeaseContainer toy={props.modal.modal.toy}/>;
    break;
    default:
    return null;
  }

  let modalStyle;
  if(props.modal.modal.modal === 'createLease' || props.modal === 'CreateBoard'){
    modalStyle = {background: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) )`};
  } else {
    modalStyle = {background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) )`};
  }

  let newClass="modal-child";
  if (props.modal.modal.modal === 'createLease') {
    newClass="modal-child1";
  }

  return (
      <div className="modal-background" onClick={closeModal} style={modalStyle}>
        <div className={newClass} onClick={e => e.stopPropagation()}>
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
