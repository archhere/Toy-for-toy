import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CreateMyLease extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start_date: '',
      end_date: '',
      rental_status: 'accepted',
      toy_id: this.props.currentToy._id,
      renter_id: this.props.currentUser._id,
      owner_id: this.props.currentToy.ownerId,
    };

  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  componentDidMount(){
    this.props.requestAllLease(this.props.currentToy._id);
  }

  

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createLease(this.state)
        .then(() => this.props.closeModal()).then(this.props.history.push('/user'));
    }

  renderSubmitButton() {

    }

    handleClose(){
      return () => this.props.closeModal().then(this.props.history.push('/discover'));
    }


    render() {
      const { minDate, maxDate, currentToy } = this.props;
      if (currentToy == null) return null;
      const divStyle = {
        width: '80%',
        'align-self': 'center'
      };

      // let endDate = ending.toJSON().slice(0, 10);
      return (
        <aside className="booking-form-container">
          <div className="thesetwo123">
          <span>{this.props.currentToy.description}</span>
          <span id="close-modal" onClick={this.handleClose()}>X</span>
          </div>
          <div className="booking-description">

            <h3>${currentToy.rental_rate}</h3>
            <p>per day</p>
          </div>

          <form onSubmit={(e) => this.handleSubmit(e)} >
            <div className="booking-input-container">
              <div className="booking-check">
                <h5>Reserve from</h5>
                <input
                  type="date"
                  min={minDate}
                  max={minDate}
                  value={this.state.start_date}
                  onChange={this.handleChange("start_date")}
                  className="start_date_input"
                  required
                />
              </div>

              <div className="booking-check">
                <h5>Reserve to</h5>
                <input
                  type="date"
                  min={this.state.start_date}
                  max={maxDate}
                  value={this.state.end_date}
                  onChange={this.handleChange("end_date")}
                  className="start_date_input"
                  required
                />
              </div>
            </div>

            <input
              type="submit"
              className="direct-book-btn"
              style={divStyle}
              value='Reserve'
            />
          </form>

          </aside>
        );
      }

}

export default withRouter(CreateMyLease);
