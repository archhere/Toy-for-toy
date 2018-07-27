import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';
import Geocode from "react-geocode";

const UPLOAD_PRESET = "zselilmq";
const UPLOAD_URL = "https://api.cloudinary.com/v1_1/archhere/image/upload";

class CreateToy extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        ownerId: this.props.currentUser._id,
        line1: '',
        city: '',
        state: '',
        zipcode: '',
        description: '',
        toyType: '',
        rental_rate: 0,
        rental_type: "daily",
        img_url: '',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleImageUpload = this.handleImageUpload.bind(this);
    }

    handleImageUpload(image){
    let upload = uploadRequest.post(UPLOAD_URL)
    .field('upload_preset', UPLOAD_PRESET)
    .field('file', image);
    upload.end((err, response) => {
      if (response.body.secure_url !== '') {
        this.setState({
          img_url: response.body.secure_url
        });
      }
    });
  }

  picturethumbnail(){
    if (this.state.img_url === '') {
      return (
        <div className="dropzone-text-container">
          <i class="fa fa-camera" aria-hidden="true"></i>
          <p>Drop an image or click to select a file to upload.</p>
        </div>
      );
      } else {
        return (
          <div className="picturethumbnail">
            <p>Image upload successful.Click done</p>
            <img width="150" height="150" className="imgthumbnail" src={this.state.img_url}/>
          </div>
        );
      }
  }

  update(type){
      return e => this.setState({
        [type]: e.currentTarget.value
      });
    }

    handleSubmit(e){
      e.stopPropagation();
      e.preventDefault();
      this.props.createToy(this.state).then(this.props.history.push('/user'));
    }

    render() {
    let someclass;
    if (this.state.image_url === ''){
      someclass = "submit-create-button";
    }
    else {
      someclass = "submit-create-buttonawesome";
    }


    return (
        <div>
          <form id="CreatePegForm" onSubmit={this.handleSubmit} className="create-peg-form">
            <div className="create-peg-header-outer"><h3 className="create-peg-header">Rent your Toy</h3></div><br/>
          
            <label className="website"><span>Address</span> <br />
            <input type="text" required value={this.state.line1} placeholder="Enter your address" onChange={this.update('line1')}/>
          </label>
          <br/> <br/>
            <label className="titleform"><span>City</span> <br />
              <input type="text" required value={this.state.city} placeholder="City" onChange={this.update('city')}/>
            </label>
            <br/> <br/>
            <label className="titleform"><span>State</span> <br />
              <input type="text" required value={this.state.state} placeholder="State" onChange={this.update('state')}/>
            </label>
            <br/> <br/>
            <label className="titleform"><span>Zipcode</span> <br />
              <input type="text" required value={this.state.zipcode} placeholder="Zipcode" onChange={this.update('zipcode')}/>
            </label>
            <br/> <br/>
            <label className="titleform"><span>Description</span> <br />
              <input type="text" required value={this.state.description} placeholder="Toy name" onChange={this.update('description')}/>
            </label>
            <br/> <br/>
            <div className="search-check-in">
              <h5>Toy type</h5>
                <select defaultValue={this.state.toyType}
                  onChange={this.update("toyType")}>
                  <option value="Outdoor Play">Outdoor Play</option>
                  <option value="Building Blocks">Building Blocks</option>
                  <option value="Action Figures">Action Figures</option>
                  <option value="Games and Puzzles">Games and Puzzles</option>
                  <option value="Arts and Crafts">Arts and Crafts</option>
                  <option value="Moving toys">Moving toys</option>
                  <option value="STEM toys">STEM toys</option>
                  <option value="Books">Books</option>
                </select>
            </div>
            <br/> <br/>
              <label className="titleform"><span>Rental rate per day</span> <br />
                <input type="text" required value={this.state.rental_rate} placeholder="Daily rental rate" onChange={this.update('rental_rate')}/>
              </label>
              <br/>


            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.handleImageUpload} className="dropzone" minSize={1}>
              {this.picturethumbnail()}

            </Dropzone>

            <div className="submitouterdiv">
            <input className={someclass} type="submit" value='Done' /></div>

          </form>
        </div>
      );

    }


  }






export default withRouter(CreateToy);
