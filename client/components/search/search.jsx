import React from 'react';
import { Redirect } from 'react-router-dom';


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {search: '',
    toy_type: '',
    range: 50,
    };
  }


  handleChange(field) {
   return (e) => this.setState( {[field]: e.target.value} );
 }

 handleSubmit() {
     this.props.fetchToysByZip(this.state.search)
       .then(this.props.history.push('/discover'));
 }

 render() {
   const {minDate} = this.props;

   return (

      <form onSubmit={() => this.handleSubmit()} className="search-form">
        <div className="search-dates">
        <input
          value={this.state.search}
          onChange={this.handleChange('search')}
          className="search-bar"
          placeholder="Enter zipcode or use your current location"
        />

      </div>

        <div className="search-dates">
          <div className="search-check-in">
            <h5>Toy type</h5>
              <select defaultValue={this.state.toy_type}
                onChange={this.handleChange("toy_type")}>
                <option value="Outdoor Play">Outdoor Play</option>
                <option value="Building Blocks">Building Blocks</option>
                <option value="Action Figures">Action Figures</option>
                <option value="Games and Puzzles">Games and Puzzles</option>
                <option value="Arts and Crafts">Arts and Crafts</option>
                <option value="Moving toys">Moving toys</option>
                <option value="STEM toys">STEM toys</option>
                <option value="Books">Books</option>
              </select>
          </div>

          <div className="search-check-in">
            <h5>Range in miles</h5>
              <select defaultValue={this.state.range}
                onChange={this.handleChange("range")}>
                <option value="5">5 miles</option>
                <option value='10'>10 miles</option>
                <option value='15'>15 miles</option>
                <option value='20'>20 miles</option>
                <option value='30'>30 miles</option>
                <option value='40'>40 miles</option>
                <option value='50'>50 miles</option>
              </select>
          </div>

          <button className="search-button" type="submit">Search</button>
        </div>
      </form>
    );
  }
}

export default Search;
