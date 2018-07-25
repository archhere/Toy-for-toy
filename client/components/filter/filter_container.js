import { connect } from 'react-redux';
import Filter from './filter';
import {receiveFilter,
  removeFilter,
  receivePriceFilter,
  removePriceFilter,
  receiveRangeFilter,
  removeRangeFilter,
  receiveLocationFilter,
  removeLocationFilter,
  clearFilters} from '../../actions/filter_actions';
  import { fetchToysByGPS, fetchToysByZip,fetchToysByCity,requestAllToys } from "../../actions/toy_actions";

const mapStateToProps = (state) => ({
  filters: state.filters,
  toys: Object.values(state.toys)
});

const mapDispatchToProps = (dispatch) => ({
    receiveFilter: filter => dispatch(receiveFilter(filter)),
    removeFilter: filter => dispatch(removeFilter(filter)),
    receivePriceFilter: price => dispatch(receivePriceFilter(price)),
    removePriceFilter: price => dispatch(removePriceFilter(price)),
    receiveRangeFilter: range => dispatch(receiveRangeFilter(range)),
    removeRangeFilter: range => dispatch(removeRangeFilter(range)),
    receiveLocationFilter: location => dispatch(receiveLocationFilter(location)),
    removeLocationFilter: location => dispatch(removeLocationFilter(location)),
    clearFilters: () => dispatch(clearFilters()),
    fetchToys: () => dispatch(requestAllToys())
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
