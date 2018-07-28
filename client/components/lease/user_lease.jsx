import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class UserLease extends React.Component {

  componentDidMount() {
    this.props.requestAllToysLease();
    this.props.requestAllToys();
  }


  userLease(userLease,count,userToyHash){
    return (
      <div className='outer999'>
          <div className='welcome123'>
            You have {count} reservations.</div>
            <div className="listing-index55">
              <div className="category-wrapper1">
                <div className="category-grid">
                  {userLease.map(lease =>
                  <div className="category-holder1">
                    <img className="home-category1" src={userToyHash[lease.toy_id].img_url}></img>

                      <div className="home-text-container2">
                        <div className="home-category-title1">${userToyHash[lease.toy_id].rental_rate}</div>
                        <div className="home-category-title1">Until {lease.end_date.slice(0, 10)}</div>
                        <div className="home-category-title1">{userToyHash[lease.toy_id].description}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
        </div>
      </div>
    );

  }

  userRentdToys(userOwned,Owncount,userToyHash){
    return(
      <div className='outer999'>
      <div className='welcome123'>
        <p>You have rented out {Owncount} toys.</p>

      </div>
        <div className="listing-index55">
        <div className="category-wrapper1">
          <div className="category-grid">
            {userOwned.map(lease =>
            <div className="category-holder1">
              <img className="home-category1" src={userToyHash[lease.toy_id].img_url}></img>

                <div className="home-text-container2">
                  <div className="home-category-title1">${userToyHash[lease.toy_id].rental_rate}</div>
                  <div className="home-category-title1">Until {lease.end_date.slice(0, 10)}</div>
                  <div className="home-category-title1">{userToyHash[lease.toy_id].description}</div>

                </div>

              </div>

            )}

            </div>
          </div>
        </div>
        </div>

    );
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


    let userOwned = this.props.lease.filter((lease) => {
      return (lease.owner_id === this.props.currentUser._id) &&
      Date.parse(lease.end_date) >= Date.parse(new Date());
    }) ;

    let Owncount = userOwned.length;

    if (!this.props.toys.length) {
      return (
        <div className="search-container1">
          <div className="searchinner123">
          <h2>Welcome {this.props.currentUser.firstName}</h2>
          <p className="home-text">Take a look at your rentals and reservations</p>
          </div>
          <div className="sub-search">
            <Link id="or-text" to="/createToy">Rent out your toy!</Link>
          </div>





    </div>
      );
    } else return (

    <div >
      <div className="search-container1">
        <div className="searchinner123">
        <h2>Welcome {this.props.currentUser.firstName}</h2>
        <p className="home-text">Take a look at your rentals and reservations</p>
        </div>
        <div className="sub-search">
          <Link id="or-text" to="/createToy">Rent out your toy!</Link>
        </div>





  </div>
      {this.userLease(userLease,count,userToyHash)}

      {this.userRentdToys(userOwned,Owncount,userToyHash)}


      </div>

    );


  }

}

export default withRouter(UserLease);
