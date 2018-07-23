export const RECEIVE_FILTER = "RECEIVE_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const RECEIVE_PRICE_FILTER = "RECEIVE_PRICE_FILTER";
export const REMOVE_PRICE_FILTER = "REMOVE_PRICE_FILTER";
export const RECEIVE_RANGE_FILTER = "RECEIVE_RANGE_FILTER";
export const REMOVE_RANGE_FILTER = "REMOVE_RANGE_FILTER";

export const receiveFilter = filter => ({
  type: RECEIVE_FILTER,
  filter
});

export const removeFilter = filter => ({
  type: REMOVE_FILTER,
  filter
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS
});

export const receivePriceFilter = price => ({
  type: RECEIVE_PRICE_FILTER,
  price
});

export const removePriceFilter = () => ({
  type: REMOVE_PRICE_FILTER
});

export const receiveRangeFilter = range => ({
  type: RECEIVE_RANGE_FILTER,
  range
});

export const removeRangeFilter = () => ({
  type: REMOVE_RANGE_FILTER
});
