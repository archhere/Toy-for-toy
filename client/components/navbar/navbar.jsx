import React from 'react';
import {
  Redirect,
  Link,
} from 'react-router-dom';


class Dashboard extends React.Component {



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
      action1 = "";
      value2 = 'LOG OUT';
      action2 = (e)=> this.props.logout();
    }
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

export default Dashboard;
