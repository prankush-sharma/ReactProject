import React, { useState } from 'react';
import SignleNote from './SignleNote';
function Note() {
  const [notes, setNotes] = useState([]);
  const [curNote, setcurNote] = useState('');

  const [car, setCar] = useState({
    mode: 'Inova',
    year: '2022',
    color: 'white',
  });
  setCar({ ...car, color: 'red' });

  function updateCurNote(event) {
    setcurNote(event.target.value);
  }

  function addNote() {
    const newNotesArray = [...notes, curNote];
    setNotes(newNotesArray);
  }
  const ulStyle = {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  };

  return (
    <div>
      <input onChange={updateCurNote} type="text" />
      <button onClick={addNote}>Submit</button>
      <ul style={ulStyle}>
        {notes.map((note, index) => {
          return (
            <li key={index}>
              <SignleNote note={note} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Note;
