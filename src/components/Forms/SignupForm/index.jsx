import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import '../LoginForm/login.scss';

class SignupForm extends PureComponent {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <div className="login-page">
        <div className="login-form">
          <h2 className="login-form__title">Signup</h2>
          <input className="login-form__input" type="text" name="firstName" placeholder="Enter first name" onChange={handleChange} />
          <input className="login-form__input" type="text" name="lastName" placeholder="Enter last name" onChange={handleChange} />
          <input className="login-form__input" type="text" name="email" placeholder="Enter email" onChange={handleChange} />
          <input className="login-form__input" type="password" placeholder="Enter password" name="password" onChange={handleChange} />
          <button className="login-form__btn" type="submit" onClick={handleSubmit} >Signup</button>
          <p className="create-account">
            Already have an account?
            {' '}
            <span className="create-account__link">
              <Link to='/login'>Login</Link>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default SignupForm;
