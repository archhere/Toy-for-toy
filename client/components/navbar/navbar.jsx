import React from 'react';


import {
  Redirect,
  Link,
} from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <div>
        <header>
          <div className="home-container">
            <div className="title">
              <Link to='/' className="header-link">
                <img className="icon" src="https://res.cloudinary.com/archhere/image/upload/v1530035048/Mobile_App_Subscription_Icon.png" />
              </Link>
              <Link to='/' className="tag-line"><h4>Es-Correcto </h4></Link>
            </div>

            <div className="all-links">
              <div className = "right-side-links">
                {/* <Link to='/' className="home-link">Home</Link> */}
                <Link to='/' className="subscriptions-link">Manage Subscriptions</Link>
                <Link to='/' className="product-link">Products</Link>
                <Link to="/" className="report-link" > Reports</Link>
                {/* <Link to="/login" onClick={(e) => this.props.logout()} className="logout"> Logout</Link> */}
                <button type="button" className="logout-button" onClick={(e)=> this.props.logout().then((logout) => this.props.history.push(`/login`))}>Logout</button>
              </div>
            </div>
          </div>

        </header>

      </div>
    );
  }
}

export default Navbar;
