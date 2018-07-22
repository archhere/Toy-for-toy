import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import SearchContainer from '../search/search_container';

class ToyIndex extends React.Component {
  // componentDidMount(){
  //   this.props.fetchToys();
  // }

  handleCategory(field) {
    return (e) => {
      this.props.receiveFilter(field);
      this.props.history.push('/discover');
    };
  }

  handleGroup(capacity) {
    // return (e) => this.props.receiveGroupFilter(20)
    //   .then( () => this.props.history.push('/discover'));
  }




  render() {
    // if (this.props.toys.length <= 1) return null;

    return (
      <div className="home-container1">

            <div className="search-container">
              <h2>Tired of buying new toys all the time?</h2>
              <p className="home-text">Rent toys at a budget or rent your unused toys and make money</p>
              <SearchContainer />

              <div className="sub-search">
                <Link className="or-text" to="/discover">Not sure where to look? Browse some popular toys!</Link>


              </div>

        </div>

        <div className="home-categories">
          <h2 className="browse-toys">Browse toys...</h2>

          <div className="category-wrapper">
          <div className="category-grid">
            <div className="category-holder">
              <img className="home-category" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4LsZuj-GE81G3f3KnlL04oVu36oSHdLVOjn7iHwuYJPYhTFwZ" onClick={this.handleCategory('Outdoor Play')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Outdoor Play')} className="home-category-title">Outdoor Play</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://img.grouponcdn.com/deal/4Qt9XS6E18GC46yMMepqqyHRmKLU/4Q-1864x1119/v1/c700x420.jpg" onClick={this.handleCategory('Building blocks')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Building blocks')}>Building blocks</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://i.ytimg.com/vi/4EKA5WYOw30/maxresdefault.jpg" onClick={this.handleCategory('Action figures')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Action figures')}>Action figures</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="http://www.chboothlibrary.org/wp-content/uploads/2015/01/StackOfGames.jpg" onClick={this.handleCategory('Games and puzzles')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Games and puzzles')}>Games and puzzles</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="http://dont-touch.me/wp-content/uploads/2018/04/art-project-ideas-for-teens-arts-and-crafts-ideas-40-easy-crafts-for-teens-tweens-happiness-is-download.png" onClick={this.handleCategory('Arts and crafts')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Arts and crafts')}>Arts and crafts</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://i.ytimg.com/vi/faqeah154H0/maxresdefault.jpg" onClick={this.handleCategory('Moving toys')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('Vehicles and moving toys')}>Moving toys</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://cdn.thewirecutter.com/wp-content/uploads/2017/08/learning-toys-2x1-fullres-5308-1024x512.jpg" onClick={this.handleCategory('STEM toys')}></img>
              <div className="home-text-container">
                <p className="home-category-title" onClick={this.handleCategory('STEM toys')}>STEM toys</p>
                <p className="options-near-me">Popular toys near me</p>
              </div>
            </div>

            <div className="category-holder">
              <img className="home-category" src="https://ae01.alicdn.com/kf/HTB17cuiJFXXXXb5XpXXq6xXFXXXk/224230635/HTB17cuiJFXXXXb5XpXXq6xXFXXXk.jpg" onClick={this.handleCategory('STEM toys')}></img>
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
