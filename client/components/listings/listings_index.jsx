import React from 'react';
import FilterContainer from '../filter/filter_container';

class ListingsIndex extends React.Component {


  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestAllToysLease();
  }


  componentWillReceiveProps(nextProps){
    if(!this.props.lease.length){
      this.props.requestAllToysLease();
    }
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

    let currentListings = this.props.listings;


    return currentListings.map( listing =>
      <div className="category-wrapper1">
      <div className="category-grid">
        <div className="category-holder1">
          <img className="home-category1" src={listing.img_url}></img>
          <div className="home-text-container1">
            <p className="home-category-title" className="home-category-title">{listing.description}</p>
            <p className="options-near-me" onClick={() => this.props.openModal({modal: 'createLease',toy: listing})}>Click to reserve</p>
          </div>
        </div>
      </div>
    </div>

  );
}

  render() {

    return (

        <section className="listing-index" key={Math.random()}>
          {this.renderListingItem()}
        </section>

    );
  }
}

export default ListingsIndex;
