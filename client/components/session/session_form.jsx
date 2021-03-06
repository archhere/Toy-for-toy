import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.props.clearForm();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then((payload) => this.props.closeModal());
  }

  demoLogin(e) {
    e.preventDefault();
    let password = "password";
    const newdemo = () => {
      setTimeout(() => {
        if (password.length > 0) {
          this.setState({
            email: 'rishabh@gmail.com',
            password: this.state.password.concat(password[0])
          });
          password = password.slice(1);
          newdemo();
        }
        else {
          this.props.login(this.state)
            .then(() => this.props.closeModal());
        }
      }, 100);

    };
    newdemo();

  }


  renderErrors() {
    let slice;
    
    if (this.props.formType === "Signup") {
      if (this.props.errors) {
        slice = this.props.errors.slice(10, this.props.errors.length - 2);
      }
    } else {
      slice = this.props.errors;
    }
    return(
      <div className="errors">{slice}</div>
    );
  }

  // renderErrors(field) {
  //   return (
  //     <div key={`error-${field}`} className='signup-errors'>
  //         {this.props.errors.find((error) => error.includes(field))}
  //       </div>
  //     );
  //   }

  render() {
    const sharedFormSection = () => {
      return (
      // <div className='outersessionpage'>

      <div className="login-form">
        <br/>
        <label>Email:
          <br/>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            autoComplete="yes"
          />
          </label>
          <br/>
          <label>Password:
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              autoComplete="no"
            />
          </label>
        </div>
      // </div>
      );
    };

    const otherSection = () => {
      return (
        <div className="otherinfo123">
        <br/>
        <label>First Name:
          <br/>
          <input type="text"
            value={this.state.firstName}
            onChange={this.update('firstName')}
            className="login-input"
            autoComplete="yes"
          />
        <br/>
        </label>
        <br/>
        <label>Last Name:
          <br/>
          <input type="text"
            value={this.state.lastName}
            onChange={this.update('lastName')}
            className="login-input"
            autoComplete="yes"
          />
        </label>
        <br/>
      </div>
      );
    };

    let welcomeText;
    if (this.props.formType === "Signup"){
      welcomeText = "Hello new user";
    } else {
      welcomeText = "Welcome Back";
    }
    return (

      <div className="auth-form">
        <form className="login-form-box" onSubmit={this.handleSubmit} >

          <br/>
          <span className="welcome">{welcomeText}</span>
          <br/>
          <span className="signuptext">{this.props.formType} to rent and share!</span>

          <div className="sharedformandcommon">
          {this.renderErrors()}

          {sharedFormSection()}
          { this.props.formType === 'Signup' ? otherSection() : <div></div> }
          <br/>
          <button className="session-submit" type="submit">{this.props.formType}</button>
          <br/>

          <input className="demo-login"
            onClick={(e) => this.demoLogin(e)} type="submit" value="Demo" />
          <br />
            <input className="session-submit1"
              onClick={() => this.props.closeModal()} type="submit" value="Cancel" />
            <br />

          </div>
        </form>
      </div>

    );
  }
}

export default withRouter(SessionForm);
