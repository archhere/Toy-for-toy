import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import SearchContainer from '../search/search_container';

class ToyIndex extends React.Component {

  handleCategory(field) {
    return (e) => {
      this.props.receiveFilter(field);
      this.props.history.push('/discover');
    };
  }



  render() {
    // if (this.props.toys.length <= 1) return null;

    return (
      <div className="home-container1">

            <div className="search-container">
              <div className="searchinner123">
              <h2>Tired of buying new toys all the time?</h2>
              <p className="home-text">Rent toys at a budget or rent your unused toys and make money</p>
              </div>
              <div className="sub-search">
                <Link id="or-text" to="/discover">Click here to search!</Link>
              </div>





        </div>

        <div className="home-categories">
          <h2 className="browse-toys">If you are looking for a specific type of toy, click one of the below toy types...</h2>

          <div className="category-wrapper">
          <div className="category-grid">
            <div className="category-holder">
              <img className="home-category" src="https://res.cloudinary.com/archhere/image/upload/c_scale,h_243,w_243/v1532409430/BounceHouseRainforestRun.gif" onClick={this.handleCategory('Outdoor Play')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Outdoor Play')} className="home-category-title">Outdoor Play</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://res.cloudinary.com/archhere/image/upload/c_scale,h_243,w_243/v1532409979/train.jpg" onClick={this.handleCategory('Building blocks')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Building blocks')}>Building blocks</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://res.cloudinary.com/archhere/image/upload/c_scale,h_243,w_243/v1532411856/maxresdefault.jpg" onClick={this.handleCategory('Action figures')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Action figures')}>Action figures</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://res.cloudinary.com/archhere/image/upload/c_scale,h_243,w_243/v1532410653/boardgames.jpg" onClick={this.handleCategory('Games and puzzles')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Games and puzzles')}>Games & puzzles</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://res.cloudinary.com/archhere/image/upload/c_scale,h_243,w_243/v1532411207/tile-art-for-kids-bellsfb.jpg" onClick={this.handleCategory('Arts and crafts')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Arts and crafts')}>Arts and crafts</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://res.cloudinary.com/archhere/image/upload/c_scale,h_243,w_243/v1532411394/Kids-Sitting-On-Ride-On.jpg" onClick={this.handleCategory('Moving toys')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Moving toys')}>Moving toys</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://res.cloudinary.com/archhere/image/upload/c_scale,h_243,w_243/v1532411512/molecular-models-514410727-59fb34f513f129003769b6a7.jpg" onClick={this.handleCategory('STEM toys')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('STEM toys')}>STEM toys</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://res.cloudinary.com/archhere/image/upload/c_scale,h_243,w_243/v1532411595/HTB17cuiJFXXXXb5XpXXq6xXFXXXk.jpg" onClick={this.handleCategory('Books')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Books')}>Books</p>
                <p className="options-near-me">Kids books near me</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
);
}
}


export default ToyIndex;
