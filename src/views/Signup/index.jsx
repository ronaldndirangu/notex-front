import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignupForm from '../../components/Forms/SignupForm';
import { signupUser } from '../../redux/actionCreators';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { signup, history } = this.props;
    
    signup(this.state, history);
  }
  
  render() {
    return (
      <SignupForm 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({ 
  signup: bindActionCreators(signupUser, dispatch) 
});

export default connect(null, mapDispatchToProps)(Signup);
