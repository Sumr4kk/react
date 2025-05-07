import React, { useState } from 'react';

function NewApp() {
    const initNotes = [
        {
          id: 'GYi9G_uC4gBF1e2SixDvu',
          prop1: 'value11',
          prop2: 'value12',
          prop3: 'value13',
        },
        {
          id: 'IWSpfBPSV3SXgRF87uO74',
          prop1: 'value21',
          prop2: 'value22',
          prop3: 'value23',
        },
        {
          id: 'JAmjRlfQT8rLTm5tG2m1L',
          prop1: 'value31',
          prop2: 'value32',
          prop3: 'value33',
        },
      ];

  const [notes, setNotes] = useState(initNotes);
  const [inputValues, setInputValues] = useState({ prop1: '', prop2: '', prop3: '' });

  // Функция для изменения элемента
  function doSmth(id) {
    setNotes(notes.map(note => {
      if (note.id === id) {
        note.prop1 += '!';
        note.prop2 += '!';
        note.prop3 += '!';
      }
      return note;
    }));
  }

  // Функция для удаления элемента
  const removeNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // Функция для заполнения инпутов данными из элемента
  const fillInputs = (note) => {
    setInputValues({ prop1: note.prop1, prop2: note.prop2, prop3: note.prop3 });
  };

  // Функция для обновления элемента из инпутов
  const updateNoteFromInputs = (id) => {
    setNotes(notes.map(note => {
      if (note.id === id) {
        return { ...note, ...inputValues }; // Обновляем значения
      }
      return note;
    }));
  };

  return (
    <div>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <span>{note.prop1}</span>
            <span>{note.prop2}</span>
            <span>{note.prop3}</span>
            <button onClick={() => doSmth(note.id)}>Изменить</button>
            <button onClick={() => removeNote(note.id)}>Удалить</button>
            <button onClick={() => fillInputs(note)}>Заполнить инпуты</button>
          </li>
        ))}
      </ul>

      {/* Инпуты для обновления данных */}
      <input 
        type="text" 
        placeholder="Prop1" 
        value={inputValues.prop1} 
        onChange={(e) => setInputValues({...inputValues, prop1: e.target.value})} 
      />
      <input 
        type="text" 
        placeholder="Prop2" 
        value={inputValues.prop2} 
        onChange={(e) => setInputValues({...inputValues, prop2: e.target.value})} 
      />
      <input 
        type="text" 
        placeholder="Prop3" 
        value={inputValues.prop3} 
        onChange={(e) => setInputValues({...inputValues, prop3: e.target.value})} 
      />
      {/* Кнопка для обновления элемента из инпутов */}
      {notes.map(note => (
        <button key={note.id} onClick={() => updateNoteFromInputs(note.id)}>Обновить элемент</button>
      ))}
    </div>
  );
}

export default NewApp;
