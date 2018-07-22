import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { requestAllToys, fetchToysByGPS, fetchToysByZip } from '../../actions/toy_actions';
import { withRouter } from 'react-router';
import { clearFilters } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => ({
  listings: Object.values(state.toys),
  // searchListings: Object.values(state.searchedListings),
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  requestAllToys: () => dispatch(requestAllToys()),
  fetchToysByZip: () => dispatch(fetchToysByZip()),
  clearFilters: () => dispatch(clearFilters())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingsIndex));
