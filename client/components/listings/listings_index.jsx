import React from 'react';
import FilterContainer from '../filter/filter_container';

class ListingsIndex extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestAllToys();
    // navigator.geolocation.getCurrentPosition(
    //   pos => {
    //     this.setState({ pos: pos });
    //     this.props.fetchSpotsByGPS({
    //       latitude: pos.coords.latitude,
    //       longitude: pos.coords.longitude,
    //       range: this.state.range
    //     });
    //   },
    //   () => {
    //     this.props.fetchToysByZip({
    //       zip: this.state.zip,
    //       range: this.state.range
    //     });
    //   }
    // );
  }

  componentWillUnmount() {
    // this.props.clearSearchListings();
    this.props.clearFilters();
  }

  componentWillReceiveProps(nextProps){
    // if(this.props !== nextProps){
    //   this.state.filters
    // }
    console.log(nextProps);
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
    filteredListings = filteredListings.filter(listing => listing.capacity >= filters['capacity']);
    return filteredListings;
  }

  renderListingItem() {
    const { listings, listingPhotos, searchedListings } = this.props;
    let currentListings = listings;

    // if (this.props.searchListings.length > 0 ){
    //   currentListings = this.props.searchListings;
    // }
    //
    // currentListings = this.applyFilters(currentListings);

    return currentListings.map( listing =>
      <div className="category-wrapper">
      <div className="category-grid">
        <div className="category-holder1">
          <img className="home-category1" src={listing.img_url}></img>
          <div className="home-text-container">
            <p className="home-category-title" className="home-category-title">{listing.description}</p>
            <p className="options-near-me">Click to reserve</p>
          </div>
        </div>
      </div>
    </div>

  );
}

  render() {
    // const { listingPhotos } = this.props;
    return (

        <section className="listing-index" key={Math.random()}>
          {this.renderListingItem()}
        </section>
      
    );
  }
}

export default ListingsIndex;
