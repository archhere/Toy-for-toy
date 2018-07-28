import React from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';


class Navbar extends React.Component {



  render() {
    
    let value1;
    let value2;
    let action1;
    let action2;
    if (!this.props.loggedIn){
      value1 = 'SIGN UP';
      value2 = 'LOG IN';
      action1 = () => this.props.openModal({modal: 'signup'});
      action2 = () => this.props.openModal({modal: 'login'});
    } else{
      value1 = 'MY TOYS';
      action1 = () => (this.props.history.push('/user'));
      value2 = 'LOG OUT';
      action2 = (e)=> this.props.logout();
    }
    return (
      <div>
        <header>
          <div className="home-container">
            <div className="title">
              <Link to='/' className="header-link">
                <img className="icon" src="https://res.cloudinary.com/archhere/image/upload/v1532054909/5b939de5-5536-4993-99cd-f7ac7b2ad370.png" />
              </Link>
              <h4 className="tag-line">Play - Learn - Rent - Repeat </h4>
            </div>


            <div className="all-links">
              <div className = "right-side-links">
                <button type="button" className="subscriptions-link"  onClick={action1}>{value1}</button>
                <button type="button" className="logout-button" onClick={action2}>{value2}</button>
              </div>
            </div>
            </div>
        </header>

      </div>
    );
  }
}

export default Navbar;
