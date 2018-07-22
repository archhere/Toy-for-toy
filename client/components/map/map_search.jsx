import React from 'react';
import ListingsMap from './listings_map';
import ListingsIndexContainer from '../listings/listings_index_container';

class MapSearch extends React.Component {


  render() {


    return (
      <div className="index-map-container">
        <ListingsIndexContainer />
        <ListingsMap listings={this.props.toys}/>
      </div>
    );
  }
}

export default MapSearch;
