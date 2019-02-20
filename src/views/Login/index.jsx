import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../../components/Forms/LoginForm';
import { loginUser } from '../../redux/actionCreators';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { login, history } = this.props;
    const { email, password } = this.state;
    
    login({ email, password }, history);
  }
  
  render() {
    return (
      <LoginForm 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({ 
  login: bindActionCreators(loginUser, dispatch) 
});

export default connect(null, mapDispatchToProps)(Login);
