import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNotes, getNote } from '../../redux/actionCreators';
import './sidebar.scss';


const withNav = PassedComponent => {
  class SideBar extends Component {
    componentDidMount() {
      const { getNotes } = this.props;
      getNotes();
    }
    
    handleClick = (noteId) => {
      const { getNote } = this.props;
      getNote(noteId);
    }

    renderBrand = () => {
      return (
        <div>
          <nav>
            <Link className="brand" to="/">NoteX</Link>
          </nav>
        </div>
      );
    };

    renderNotes = () => {
      const { notes, isLoading } = this.props.notes;
      return (
        !isLoading && notes && notes.map(note => {
          return (
            <Link onClick={() => this.handleClick(note.id)} className="note-link" key={note.id} to={`/notes/${note.id}`}>
              <div className="container__sidebar__notes">
                {note.title}
              </div>
            </Link>   
          )
        })
      );
    }
    
    render() {
      return (
        <div className="container">
          <div className="container__sidebar">
            {this.renderBrand()}
            {this.renderNotes()}
          </div>
          <div className="container__content">
            <PassedComponent {...this.props} />
          </div>
        </div>
      )
    }

  }
  const  mapStateToProps = state => ({
      notes: state.notes
    });
  return connect(mapStateToProps, {getNotes, getNote })(SideBar);
}

export default withNav;