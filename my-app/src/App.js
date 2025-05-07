import React, { useState } from 'react';
import NewApp from './AppTask76'
import AppTask77 from './AppTask77'

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

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [inputValues, setInputValues] = useState({ prop1: '', prop2: '', prop3: '' });
  
  // Функция для добавления нового элемента
  const addNote = () => {
    const newNote = {
      id: Math.random().toString(36).substring(7), // Генерация случайного ID
      prop1: inputValues.prop1,
      prop2: inputValues.prop2,
      prop3: inputValues.prop3,
    };
    setNotes([...notes, newNote]);
    setInputValues({ prop1: '', prop2: '', prop3: '' }); // Очистка инпутов
  };

  // Функция для удаления элемента
  const removeNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // Функция для изменения элемента
  const updateNote = (id, index) => {
    const updatedNotes = notes.map(note => 
      note.id === id ? { ...note, prop1: note.prop1 + '!' } : note
    );
    setNotes(updatedNotes);
  };

  // Функция для переворота массива
  const reverseNotes = () => {
    setNotes([...notes].reverse());
  };

  return (
    <div>
      <h1>TASK#73</h1>
      <ul>
        {notes.map((note, index) => (
          <li key={note.id}>
            <span onClick={() => updateNote(note.id, index)}>{note.prop1}</span>
            <span>{note.prop2}</span>
            <span>{note.prop3}</span>
            <button onClick={() => removeNote(note.id)}>Удалить</button>
          </li>
        ))}
      </ul>
      <h1>TASK#74</h1>
      {/* Инпуты для добавления нового элемента */}
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
      <h1>TASK#75</h1>
      <button onClick={addNote}>Добавить элемент</button>
      
      {/* Кнопка для переворота списка */}
      <button onClick={reverseNotes}>Перевернуть список</button>
      <h1>TASK#76</h1>
      <NewApp/>
      <h1>TASK#77</h1>
      <AppTask77/>
    </div>
  );
}

export default App;
