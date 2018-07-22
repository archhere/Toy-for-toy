import { RECEIVE_ONE_TOY, RECEIVE_ALL_TOYS, REMOVE_TOY,RECEIVE_TOYS } from '../actions/toy_actions';
import merge from 'lodash/merge';

const toyReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_TOY:
      let newState = merge({}, state);
      let toy = JSON.parse(action.payload);
      newState[toy._id] = toy;
      return newState;
    case RECEIVE_ALL_TOYS:
      let toys = JSON.parse(action.payload);
      let hash_toys = {};
      toys.forEach((toy) => {
        hash_toys[toy._id] = toy;
      });
      return hash_toys;
    case RECEIVE_TOYS:
        let newtoys = JSON.parse(action.payload);
        let newhash_toys = {};
        newtoys.forEach((newtoy) => {
          newhash_toys[newtoy._id] = newtoy;
        });
        return newhash_toys;  
    case REMOVE_TOY:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default toyReducer;
