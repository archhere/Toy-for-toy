import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { requestAllToys, fetchToysByGPS, fetchToysByZip } from '../../actions/toy_actions';
import { withRouter } from 'react-router';
import { clearFilters } from '../../actions/filter_actions';
import { openModal } from '../../actions/modal_actions';
import { closeModal } from '../../actions/modal_actions';
import { requestAllToysLease } from '../../actions/lease_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state.filters);
  console.log(state.lease);
  return {
    // listings: Object.values(state.toys),
    // searchListings: Object.values(state.searchedListings),
    filters: state.filters,
    listings: ownProps.props,
    lease: Object.values(state.lease),
  };

};

const mapDispatchToProps = (dispatch) => ({
  requestAllToys: () => dispatch(requestAllToys()),
  fetchToysByZip: () => dispatch(fetchToysByZip()),
  clearFilters: () => dispatch(clearFilters()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  requestAllToysLease: () => dispatch(requestAllToysLease()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingsIndex));
