import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './config/config';
import firebase from 'firebase/app';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('notes');

    this.state = {
      notes: [],
    }
  }

  addNote(note){
    const previousNotes = this.state.notes;
    previousNotes.push(note);
    this.setState){
      notes: previousNotes;
    }
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React & Firebase To-Do List</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return(
                <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />
              )
            })
          }
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote}/>
        </div>
      </div>
    );
  }
}

export default App;
