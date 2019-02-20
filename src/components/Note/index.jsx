import React, { Component } from 'react';
import withNav from '../../hoc/Sidebar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNote } from '../../redux/actionCreators/noteActions';

class Note extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { noteId } = match.params;
    const { getNote } = this.props;
    getNote(noteId);
  }

  render() {
    const { note } = this.props;
    return (
      <div>
        <h1>{note.title}</h1>
        <p>{note.body}</p>
      </div>
    )
  }
}

const matchDispatchToProps = dispatch => ({
  getNote: bindActionCreators(getNote, dispatch)
});

const matchStateToProps = state => ({
  note: state.notes.note
});

export default withNav(connect(matchStateToProps, matchDispatchToProps)(Note));
