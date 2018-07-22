import React from 'react';
import { Redirect } from 'react-router-dom';


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {search: '',
    toy_type: '',
    age: '',
    };
  }

  handleChange(field) {
   return (e) => this.setState( {[field]: e.target.value} );
 }

 handleSubmit() {
   this.props.searchListings(this.state.search)
     .then(this.props.history.push('/discover'));
 }

 render() {
   const {minDate} = this.props;

   return (

      <form onSubmit={() => this.handleSubmit()} className="search-form">
        <input
          value={this.state.search}
          onChange={this.handleChange('search')}
          className="search-bar"
          placeholder="Enter zipcode or city"
        />

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

          <button className="search-button" type="submit">Search</button>
        </div>
      </form>
    );
  }
}

export default Search;
