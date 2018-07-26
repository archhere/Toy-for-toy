import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CreateMyLease extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start_date: '',
      end_date: '',
      rental_status: '',
      toy_id: this.props.match.params.toyId,
      renter_id: this.props.currentUser._id,
      owner_id: ''
    };
    

  }

  ComponentDidMount(){
    this.props.requestOneToy(this.props.match.params.toyId);
  }

  render(){
    return (
      <div>
        "Great"
      </div>
    );
  }

}

export default withRouter(CreateMyLease);
