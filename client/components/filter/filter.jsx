import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    // allows for re-rendering upon local state change
  }

  toggleBoolean(field) {
    const { filters, receiveFilter, removeFilter } = this.props;

    return (e) => {
      if (filters[field]) removeFilter(field);
      else receiveFilter(field);
    };
  }

  togglePriceFilter(price) {
    const { filters, receivePriceFilter, removePriceFilter } = this.props;

    return (e) => {
      if (filters['price'] === price) removePriceFilter(price);
      else receivePriceFilter(price);
    };
  }

  toggleRangeFilter(range) {
    const { filters, receiveRangeFilter, removeRangeFilter } = this.props;

    return (e) => {
      if (filters['range'] === range) removeRangeFilter(range);
      else receiveRangeFilter(range);
    };
  }

  toggleLocationFilter(location) {
    const { filters, receiveLocationFilter, removeLocationFilter } = this.props;

    return (e) => {
      if (filters['location'] === location) removeLocationFilter(location);
      else receiveLocationFilter(location);
    };
  }



  render() {
    const { filters } = this.props;

    return (
      <div className="filters-container">
        <h2>Search Filters</h2>


        <h3>Toy Type</h3>
        <ul>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('Outdoor Play')}
              checked={filters['Outdoor Play'] === true}
              />
              <label>Outdoor Play</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('Building blocks')}
              checked={filters['Building blocks'] === true}
              />
              <label>Building blocks</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('Action figures')}
              checked={filters['Action figures'] === true}
              />
              <label>Action figures</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('Games and puzzles')}
              checked={filters['Games and puzzles'] === true}
              />
              <label>Games and puzzles</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('Arts and crafts')}
              checked={filters['Arts and crafts'] === true}
              />
              <label>Arts and crafts</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('Vehicles and moving toys')}
              checked={filters['Vehicles and moving toys'] === true}
              />
              <label>Vehicles and moving toys</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('STEM toys')}
              checked={filters['STEM toys'] === true}
              />
              <label>STEM toys</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleBoolean('Books')}
              checked={filters['Books'] === true}
              />
              <label>Books</label>
          </li>
        </ul>

        <h3>Pricing</h3>
        <ul>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.togglePriceFilter(122493)}
              checked={filters['price'] === 122493}
              />
              <label>Any Price</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.togglePriceFilter(25)}
              checked={filters['price'] === 25}
              />
              <label>Under $25</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.togglePriceFilter(50)}
              checked={filters['price'] === 50}
              />
              <label>Under $50</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.togglePriceFilter(75)}
              checked={filters['price'] === 75}
              />
              <label>Under $75</label>
          </li>
        </ul>

        <h3>Range</h3>
        <ul>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleRangeFilter(50)}
              checked={filters['range'] === 50}
              />
            <label>Any Range</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleRangeFilter(5)}
              checked={filters['range'] === 5}
              />
            <label>under 5 miles</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleRangeFilter(10)}
              checked={filters['range'] === 10}
              />
            <label>under 10 miles</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleRangeFilter(20)}
              checked={filters['range'] === 20}
              />
            <label>under 20 miles</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleRangeFilter(30)}
              checked={filters['range'] === 30}
              />
            <label>under 30 miles</label>
          </li>
        </ul>

        <h3>Location</h3>
        <ul>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleLocationFilter('Fremont')}
              checked={filters['location'] === 'Fremont'}
              />
            <label>Fremont</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleLocationFilter('San Fransisco')}
              checked={filters['location'] === 'San Fransisco'}
              />
            <label>San Fransisco</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleLocationFilter('Los Angeles')}
              checked={filters['location'] === 'Los Angeles'}
              />
            <label>Los Angeles</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleLocationFilter('Santa Cruz')}
              checked={filters['location'] === 'Santa Cruz'}
              />
            <label>San Jose</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleLocationFilter('Geolocation')}
              checked={filters['location'] === 'Geolocation'}
              />
            <label>Your current location</label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;