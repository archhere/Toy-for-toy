import {RECEIVE_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTERS,
  RECEIVE_PRICE_FILTER,
  REMOVE_PRICE_FILTER,
  RECEIVE_RANGE_FILTER,
  REMOVE_RANGE_FILTER,
  RECEIVE_LOCATION_FILTER,
  REMOVE_LOCATION_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const defaultState = ({
  range: 50,
  price: 122493,
  type: "",
  location: "Fremont",
});

const filtersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FILTER:
      return merge({}, state, {[action.filter]: true});
    case REMOVE_FILTER:
      return merge({}, state, {[action.filter]: false});
    case CLEAR_FILTERS:
      return defaultState;
    case RECEIVE_PRICE_FILTER:
      return merge({}, state, {price: action.price});
    case REMOVE_PRICE_FILTER:
      return merge({}, state, {price: 122493});
    case RECEIVE_RANGE_FILTER:
      return merge({}, state, {range: action.range});
    case REMOVE_RANGE_FILTER:
      return merge({}, state, {range: 50});
    case RECEIVE_LOCATION_FILTER:
      return merge({}, state, {location: action.location});
    case REMOVE_LOCATION_FILTER:
      return merge({}, state, {location: "Fremont"});
    default:
      return state;
  }
};

export default filtersReducer;
