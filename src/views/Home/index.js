import React, { Component } from 'react';
import withNav from '../../hoc/Sidebar';
import withFloatButton from '../../hoc/FloatButton'
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { notes } = this.props.notes;
    const note = notes && notes[0] ? notes[0] : {};
    return (
      <div>
        <div>
          <h1>{note.title}</h1>
          <p>{note.body}</p>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  notes: state.notes
})

export default withNav(withFloatButton(connect(mapStateToProps, null)(Home)));
