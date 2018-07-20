import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';


const modalReducer = (state = null, action) => {
  console.log("atleast bit this");
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return { modal: action.modal};
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};

export default modalReducer;
