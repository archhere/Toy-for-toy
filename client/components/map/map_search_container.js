import { connect } from 'react-redux';
// import { fetchListings } from '../../actions/listing_actions';
import { fetchToysByGPS, fetchToysByZip,fetchToysByCity,requestAllToys } from "../../actions/toy_actions";
import MapSearch from './map_search';



const mapStateToProps = state => {
  return {
    toys: Object.values(state.toys),
  };
};


const mapDispatchToprops = (dispatch) => ({
  fetchToysByGPS: gps => dispatch(fetchToysByGPS(gps)),
  fetchToysByZip: zip => dispatch(fetchToysByZip(zip)),
  // fetchToysByCity: city => dispatch(fetchToysByCity(city)),
  fetchToys: () => dispatch(requestAllToys())
});

export default connect(mapStateToProps, mapDispatchToprops)(MapSearch);
