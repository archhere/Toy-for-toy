import * as ToyAPIUtil from '../util/toy_util.js';
export const RECEIVE_ALL_TOYS = 'RECEIVE_ALL_TOYS';
export const RECEIVE_TOYS = 'RECEIVE_TOYS';
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

// export const removeToy = id => dispatch => {
//   ToyAPIUtil.deleteToy(id);
//   dispatch({type: REMOVE_TOY, id: id});
// };

export const removeToy = id => dispatch => {
  ToyAPIUtil.deleteToy(id)
  .then(res => dispatch({type: REMOVE_TOY, id: id}));
};

export const fetchToysByGPS = (gps) => dispatch => {
  return ToyAPIUtil.fetchToysByGPS(gps).then(response =>
    dispatch({ type: RECEIVE_TOYS, payload: response })
  );
};

export const fetchToysByZip = (zip) => dispatch => {
  return ToyAPIUtil.fetchToysByZip(zip).then(response =>
    dispatch({ type: RECEIVE_TOYS, payload: response })
  );
};

export const fetchToysByCity = (city) => dispatch => {
  return ToyAPIUtil.fetchToysByCity(city).then(response =>
    dispatch({ type: RECEIVE_TOYS, payload: response })
  );
};
