import React from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <header>
          <div className="home-container">
            <div className="title">
              <Link to='/' className="header-link">
                <img className="icon" src="https://res.cloudinary.com/archhere/image/upload/v1531850086/logo.png" />
              </Link>
              <Link to='/' className="tag-line"><h4>Toy-for-toy </h4></Link>
            </div>
            <div className="searchbarouter">
              <div>
                <input type="text" className="searchbar" placeholder="Search"/>
              </div>
              <div className="search"><i className="fas fa-search"></i></div>
            </div>
            </div>
            <div className="all-links">
              <div className = "right-side-links">
                <Link to='/' className="subscriptions-link">Toys</Link>
                <button type="button" className="logout-button" onClick={(e)=> this.props.logout()}>Logout</button>
              </div>
            </div>

        </header>

      </div>
    );
  }
}

export default Dashboard;
