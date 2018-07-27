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
    let listingIds = [];
    currentListings.forEach(listing => listingIds.push(listing._id));
    let currentLeases = this.props.lease.filter(lease => (listingIds.includes(lease.toy_id) && Date.parse(lease.end_date) >= Date.parse(new Date()) ));
    let IdOfToysWithLeases = [];
    currentLeases.forEach(lease => IdOfToysWithLeases.push(lease.toy_id));
    console.log(IdOfToysWithLeases);

    // console.log(currentLeases);
    // if (currentLeases[0]) {
    //   console.log(Date.parse(currentLeases[0].start_date));
    //   console.log(Date.parse(new Date()));
    //   console.log(Date.parse(new Date()) - Date.parse(currentLeases[0].start_date));
    //   // 100000000
    // }




    return currentListings.map( listing =>
      <div className="category-wrapper1">
      <div className="category-grid">
        <div className="category-holder1">
          <img className="home-category1" src={listing.img_url}></img>

          {IdOfToysWithLeases.includes(listing._id) ?

          <div className="home-text-container2">
            <p className="home-category-title" className="home-category-title">{listing.description}</p>
            <p className="options-near-me1">Available Later</p>
          </div>
              :
          <div className="home-text-container1">
            <p className="home-category-title" className="home-category-title">{listing.description}</p>
            <p className="options-near-me" onClick={() => this.props.openModal({modal: 'createLease',toy: listing})}>Click to reserve</p>
          </div>
              }

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
