import * as ToyAPIUtil from '../util/toy_util.js';
export const RECEIVE_ALL_TOYS = 'RECEIVE_ALL_TOYS';
export const RECEIVE_ONE_TOY = 'RECEIVE_ONE_TOY';
export const REMOVE_TOY = 'REMOVE_TOY';

export const requestOneToy = id => dispatch => {
  return ToyAPIUtil.fetchOneToy(id).then(response =>
    dispatch({ type: RECEIVE_ONE_TOY, payload: response })
  );
};

export const requestAllToys = () => dispatch => {
  return ToyAPIUtil.fetchAllToys().then(response =>
    dispatch({ type: RECEIVE_ALL_TOYS, payload: response })
  );
};

export const createToy = toy => dispatch => {
  return ToyAPIUtil.createToy(toy).then(response =>
    dispatch({ type: RECEIVE_ONE_TOY, payload: response })
  );
};

export const updateToy = toy => dispatch => {
  return ToyAPIUtil.updateToy(toy).then(response =>
    dispatch({ type: RECEIVE_ONE_TOY, payload: response })
  );
};

export const removeToy = id => dispatch => {
  ToyAPIUtil.deleteToy(id);
  dispatch({type: REMOVE_TOY, id: id});
};
