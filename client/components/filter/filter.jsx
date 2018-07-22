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

  toggleCapacityFilter(capacity) {
    const { filters, receiveGroupFilter, removeGroupFilter } = this.props;

    return (e) => {
      if (filters['capacity'] === capacity) removeGroupFilter(capacity);
      else receiveGroupFilter(capacity);
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

        <h3>Group Size</h3>
        <ul>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleCapacityFilter(1)}
              checked={filters['capacity'] === 1}
              />
              <label>Any Size</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleCapacityFilter(10)}
              checked={filters['capacity'] === 10}
              />
              <label>10 or more</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleCapacityFilter(15)}
              checked={filters['capacity'] === 15}
              />
              <label>15 or more</label>
          </li>
          <li className='filter-item'>
            <input
              className='checkbox'
              type='checkbox'
              onClick={this.toggleCapacityFilter(20)}
              checked={filters['capacity'] === 20}
              />
              <label>20 or more</label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;
