import React from 'react';
import ListingsIndexContainer from '../listings/listings_index_container';
import MapSearchContainer from '../map/map_search_container';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 'ListingsIndexContainer'
    };
  }

  handleclick(type){
    return (e) => {
      if (type === "map") {
        this.setState({component: 'MapSearchContainer'});
      }
      else {
        this.setState({component: 'ListingsIndexContainer'});
      }
    };
  }

  componentWillUnmount() {
    // this.props.clearSearchListings();

    this.props.clearFilters();
  }

  componentDidMount(){
    this.props.fetchToys();
  }

  componentWillReceiveProps(nextProps){
    console.log("thistoys",this.props.toys);
    console.log("nextprops",nextProps.toys);
    if (this.props.toys.length !== nextProps.toys.length) this.props.fetchToys();
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
    let unfilteredToys = this.props.toys;
    let toyTypes = ['Outdoor Play', 'Building blocks', 'Action figures',
    'Games and puzzles', 'Arts and crafts', 'Moving toys', 'STEM toys', 'Books'];
    let filteredToyType = [];
    toyTypes.forEach((toy)=>{
      console.log(toy);
      if (filters[toy] === true) filteredToyType.push(toy);
    });
    console.log(filteredToyType);
    let toy1;
    if (!filteredToyType.length){
      toy1 = unfilteredToys;
    } else{
      // toy1 = unfilteredToys.filter(toy => filteredToyType.includes(toy.toyType));
      toy1 = unfilteredToys.filter((toy) => {
        console.log(toy.toyType);
        return filteredToyType.includes(toy.toyType);
      });
    }

    let toys = toy1.filter(toy => toy.rental_rate <= filters.price);
    const components = {
      'ListingsIndexContainer': <ListingsIndexContainer props = {toys}/>,
      'MapSearchContainer': <MapSearchContainer props = {toys}/>
    };
    const chosenComponent = this.state.component;
    return (
      <div class="finalouter1234">
        <div className="toggleDiv">
          <div className="innertoggleDiv">
            <div className="hamburgerouter" onClick={this.handleclick("list")}>

            <img className="hamburger"
              src="https://res.cloudinary.com/archhere/image/upload/v1532452080/hamburger.png">
            </img>
            List

            </div>

            <div className="hamburgerouter1" onClick={this.handleclick("map")}>

            <img className="mapmarker" src="https://res.cloudinary.com/archhere/image/upload/v1532452642/Map-Marker-PNG-Picture.png">
            </img>
              Map

            </div>
          </div>
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
                  onClick={this.toggleBoolean('Moving toys')}
                  checked={filters['Moving toys'] === true}
                  />
                <label>Moving toys</label>
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
                  onClick={this.togglePriceFilter(5)}
                  checked={filters['price'] === 5}
                  />
                  <label>Under $5</label>
              </li>
              <li className='filter-item'>
                <input
                  className='checkbox'
                  type='checkbox'
                  onClick={this.togglePriceFilter(10)}
                  checked={filters['price'] === 10}
                  />
                <label>Under $10</label>
              </li>
              <li className='filter-item'>
                <input
                  className='checkbox'
                  type='checkbox'
                  onClick={this.togglePriceFilter(20)}
                  checked={filters['price'] === 20}
                  />
                <label>Under $20</label>
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
        </div>
        <div class="changes">
          {components[chosenComponent]}
        </div>
      </div>
    );
  }
}

export default Filter;
