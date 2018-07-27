import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserLease extends React.Component {

  componentDidMount() {
    this.props.requestAllToysLease();
    this.props.requestAllToys();
  }

  render(){
    let userLeaseToyIds = [];
    let userLease = this.props.lease.filter((lease) => {
      userLeaseToyIds.push(lease.toy_id);
      return (lease.renter_id === this.props.currentUser._id) &&
      Date.parse(lease.end_date) >= Date.parse(new Date());
    }) ;

    console.log(userLease);
    let count = userLease.length;
    let userToyHash = {};
    this.props.toys.forEach((toy) => {
      if (userLeaseToyIds.includes(toy._id)) userToyHash[toy._id] = toy;
    });

    console.log(userToyHash);

    return (

    <div className="outer999">
        <div className='welcome123'>Welcome {this.props.currentUser.firstName}. You have {count} reservations.</div>
      <div className="listing-index">
        <div className="category-wrapper1">
          <div className="category-grid">
            {userLease.map(lease =>
            <div className="category-holder1">
              <img className="home-category1" src={userToyHash[lease.toy_id].img_url}></img>

                <div className="home-text-container2">
                  <div className="home-category-title" className="home-category-title">{lease.start_date.slice(0, 10)}</div>
                  <div className="home-category-title" className="home-category-title">{lease.end_date.slice(0, 10)}</div>
                  <div className="home-category-title" className="home-category-title">{userToyHash[lease.toy_id].description}</div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>

    );


  }

}

export default withRouter(UserLease);
