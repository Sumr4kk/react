import React, { useState } from 'react';

// Функция для уникального идентификатора
const id = () => Math.random().toString(36).substr(2, 9);

const initNotes = [
  {
    id: id(),
    name: 'name1',
    desc: 'long description 1',
    show: false,
  },
  {
    id: id(),
    name: 'name2',
    desc: 'long description 2',
    show: false,
  },
  {
    id: id(),
    name: 'name3',
    desc: 'long description 3',
    show: false,
  },
];

function AppTask77() {
  const [notes, setNotes] = useState(initNotes);

  const toggleShow = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, show: !note.show } : note
    ));
  };

  const result = notes.map(note => {
    return (
      <p key={note.id}>
        {note.name},
        {note.show && <i>{note.desc}</i>}
        <button onClick={() => toggleShow(note.id)}>
          {note.show ? 'Скрыть описание' : 'Показать описание'}
        </button>
      </p>
    );
  });

  return <div>{result}</div>;
}

export default AppTask77;
