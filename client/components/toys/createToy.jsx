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
      if (err) {
        alert("Image upload failed. Please try agian.");
      }
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
        <div className="toycreateform123">

          <form id="CreatePegForm" onSubmit={this.handleSubmit} className="create-toy-form">
            <div>
            <div className="create-peg-header-outer"><h3 className="create-toy-header">Rent your Toy</h3></div><br/>

            <label className="titleform"><span>Address</span> <br />
            <input className="input12345" type="text" required value={this.state.line1} placeholder="Enter your street address and number" onChange={this.update('line1')}/>
          </label>
          <br/> <br/>
            <label className="titleform"><span>Zipcode</span> <br />
              <input className="input12345" type="text" required value={this.state.zipcode} pattern="[0-9]{5}" title="Five digit zip code" placeholder="Zipcode" onChange={this.update('zipcode')}/>
            </label>
            <br/> <br/>
            <label className="titleform"><span>Toy Name</span> <br />
              <input className="input12345" type="text" required value={this.state.description} placeholder="Toy name" onChange={this.update('description')}/>
            </label>
            <br/> <br/>
            <div className="titleform">
              <span>Toy Type</span> <br />
                <select className="selec12345" defaultValue={this.state.toyType}
                  onChange={this.update("toyType")}>
                  <option value="Outdoor Play">Outdoor Play</option>
                  <option value="Building blocks">Building blocks</option>
                  <option value="Action figures">Action figures</option>
                  <option value="Games and puzzles">Games and puzzles</option>
                  <option value="Arts and crafts">Arts and crafts</option>
                  <option value="Moving toys">Moving toys</option>
                  <option value="STEM toys">STEM toys</option>
                  <option value="Books">Books</option>
                </select>
            </div>
            <br/>
              <label className="titleform"
                step="any"><span>Rental rate per day</span> <br/>
                <input type="number" min="1" step="any" className="input12345" required value={this.state.rental_rate} placeholder="Daily rental rate" onChange={this.update('rental_rate')}/>
              </label>
              <br/> <br/>
            </div>

            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.handleImageUpload} className="dropzone" minSize={1}>
              {this.picturethumbnail()}

            </Dropzone>
            <br/> <br/>
            <div className="submitouterdiv">
            <input className={someclass} type="submit" value='Done' /></div>

          </form>
        </div>
      );

    }


  }






export default withRouter(CreateToy);
