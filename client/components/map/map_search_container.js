import { connect } from 'react-redux';
// import { fetchListings } from '../../actions/listing_actions';
import { fetchToysByGPS, fetchToysByZip,fetchToysByCity,requestAllToys } from "../../actions/toy_actions";
import ListingMap from './listings_map';



const mapStateToProps = (state,ownProps) => {
  
  return {
    toys: ownProps.props,
    Alltoys: Object.values(state.toys),
    filters: state.filters,
    listings: ownProps.props
  };
};


const mapDispatchToprops = (dispatch) => ({
  fetchToysByGPS: gps => dispatch(fetchToysByGPS(gps)),
  fetchToysByZip: zip => dispatch(fetchToysByZip(zip)),
  // fetchToysByCity: city => dispatch(fetchToysByCity(city)),
  fetchToys: () => dispatch(requestAllToys())
});

export default connect(mapStateToProps, mapDispatchToprops)(ListingMap);
