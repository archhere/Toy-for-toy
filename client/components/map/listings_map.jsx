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
    console.log(this.props.toys);
    this.MarkerManager = new MarkerManager(this.map,this.props.toys);
    // this.MarkerManager.drop();
    this.MarkerManager.updateMarkers(this.props.toys);
    // console.log(this.MarkerManager);

  }

  componentWillReceiveProps(nextProps){
    console.log("called");
    if(this.props.toys !== nextProps.toys){
      this.MarkerManager.updateMarkers(this.props.toys);
    }
  }

  // componentDidUpdate() {
  //   console.log("called");
  //   this.MarkerManager.updateMarkers(this.props.toys);
  // }

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
