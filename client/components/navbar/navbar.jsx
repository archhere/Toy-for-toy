import React from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';
import Footer from '../../components/footer';

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


            <div className="all-links">
              <div className = "right-side-links">
                <Link to='/' className="subscriptions-link">Toys</Link>
                <button type="button" className="logout-button" onClick={(e)=> this.props.logout()}>Logout</button>
              </div>
            </div>
            </div>
        </header>
       <Footer />
      </div>
    );
  }
}

export default Dashboard;
