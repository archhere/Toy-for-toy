import React from 'react';
import MarkerManager from '../../util/marker_manager';
import Resizable from 're-resizable';

const getCoordsObj = latLng => ({
lat: latLng.lat(),
lng: latLng.lng()
});


class ListingsMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.5483, lng: -121.9886 },
      zoom: 8,
      clickableIcons: false,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU },
      zoomControl: true,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_CENTER
  },
    };

    const map = this.refs.map;
    this.map = new window.google.maps.Map(map, mapOptions);

    this.MarkerManager = new MarkerManager(this.map,this.props.toys);
    // this.MarkerManager.drop();
    this.MarkerManager.updateMarkers(this.props.toys);



  }

  componentWillReceiveProps(nextProps){

    if(this.props.toys !== nextProps.toys){
      this.MarkerManager.updateMarkers(this.props.toys);
    }
  }

  componentDidUpdate() {
    
    this.MarkerManager.updateMarkers(this.props.toys);
  }

  applyFilters(listings) {
    const { filters } = this.props;
    let filteredListings = listings;

    if (filters['Outdoor Play']) filteredListings = filteredListings.filter(listing => listing.category === "Outdoor Play");
    if (filters['Building blocks']) filteredListings = filteredListings.filter(listing => listing.category === "Building blocks");
    if (filters['Action figures']) filteredListings = filteredListings.filter(listing => listing.category === "Action figures");
    if (filters['Games and puzzles']) filteredListings = filteredListings.filter(listing => listing.category === "Games and puzzles");
    if (filters['Arts and crafts']) filteredListings = filteredListings.filter(listing => listing.category === "Arts and crafts");
    if (filters['Moving toys']) filteredListings = filteredListings.filter(listing => listing.category === "Moving toys");
    if (filters['STEM toys']) filteredListings = filteredListings.filter(listing => listing.category === "STEM toys");
    if (filters['Books']) filteredListings = filteredListings.filter(listing => listing.category === "Books");


    filteredListings = filteredListings.filter(listing => listing.price <= filters['price']);
    return filteredListings;
  }

  render() {
    return (
      <Resizable enable={
        {
          top: false,
          right: false,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        }
      }

      >
      <div className="map-resize">
        <div id='map' ref='map'>

        </div>
      </div>
      </Resizable>
    );
  }
}

export default ListingsMap;
