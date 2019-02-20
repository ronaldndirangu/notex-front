import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

class LoginForm extends PureComponent {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <div className="login-page">
        <div className="login-form">
          <h2 className="login-form__title">NoteX</h2>
          <input className="login-form__input" type="text" name="email" placeholder="Enter email" onChange={handleChange} />
          <input className="login-form__input" type="password" placeholder="Enter password" name="password" onChange={handleChange} />
          <button className="login-form__btn" type="submit" onClick={handleSubmit} >Login</button>
          <p className="create-account">
            Don't have an account?
            {' '}
            <span className="create-account__link">
              <Link to='/signup'>Signup</Link>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginForm;
