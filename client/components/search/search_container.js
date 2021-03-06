import { connect } from 'react-redux';
import Search from './search';
import { withRouter } from 'react-router';
import { fetchToysByGPS, fetchToysByZip,fetchToysByCity,requestAllToys } from "../../actions/toy_actions";

const mapStateToProps = (state) => {
  const currentDate = new Date();


  return {
    toys: Object.values(state.toys),
    // zip: state.entities.toys.zip,
    // range: state.entities.toys.range,
    listingsQuantity:10,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchToysByGPS: gps => dispatch(fetchToysByGPS(gps)),
  fetchToysByZip: zip => dispatch(fetchToysByZip(zip)),
  // fetchToysByCity: city => dispatch(fetchToysByCity(city)),
  fetchToys: () => dispatch(requestAllToys())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
