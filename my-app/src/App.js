import React, { useState } from 'react';

function App() {
  //52
  const [firstName, setFirstName] = useState('Иван');
  const [lastName, setLastName] = useState('Иванов');
  const [age, setAge] = useState(30);
//53
  const [firstName1, setFirstName1] = useState('Иван');
  const [lastName1, setLastName1] = useState('Иванов');

//54

const [isBanned, setIsBanned] = useState(false);

//55
const [age1, setAge1] = useState(0);

  return (

    <div>
      <h2>52#1</h2>
      <p>Имя: <span>{firstName}</span></p>
      <p>Фамилия: <span>{lastName}</span></p>
      <p>Возраст: <span>{age}</span></p>

    <h2>53#1</h2>
    <p>Имя: <span>{firstName1}</span></p>
      <button onClick={() => setFirstName1('Петр')}>Изменить имя</button>
      
      <p>Фамилия: <span>{lastName1}</span></p>
      <button onClick={() => setLastName1('Петров')}>Изменить фамилию</button>
    <h2>54#1</h2>
    <span>{isBanned ? 'Пользователь забанен ' : 'Пользователь не забанен '}</span>
      {isBanned ? (
        <button onClick={() => setIsBanned(false)}>Разбанить пользователя</button>
      ) : (
        <button onClick={() => setIsBanned(true)}>Забанить пользователя </button>
      )}
    <h2>55#1</h2>
    <p>Возраст: {age1}</p>
      <button onClick={() => setAge1(age1 + 1)}>Увеличить возраст</button>
      <button onClick={() => setAge1(age1 - 1)}>Уменьшить возраст</button>
    </div>

    
  );
}

export default App;
