import React, { Component } from 'react';
import './floatbtn.scss';

const withFloatButton = (PassedComponent) => {
  class FloatButton extends Component {
    render() {
      return (
        <div>
          <PassedComponent {...this.props} />
          <button className="add-note" type="submit">
            <i className="fas fa-plus fa-3x"></i>
          </button>
        </div>
      );
    };
  };
  return FloatButton;
};

export default withFloatButton;
