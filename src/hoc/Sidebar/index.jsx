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
      const { notes, isLoading, note: selectedNote } = this.props.notes;
      return (
        !isLoading && notes && notes.map(note => {
          const isActive = note.id === selectedNote.id;
          console.log(isActive)
          return (
            <Link 
              onClick={() => this.handleClick(note.id)} 
              className="note-link" 
              key={note.id} 
              to={`/notes/${note.id}`}
            >
              <div className={isActive ? 'note-link__active' : 'note-link__inactive'} >
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

  const actionCreators = {
    getNotes,
    getNote
  }
  return connect(mapStateToProps, actionCreators)(SideBar);
}

export default withNav;