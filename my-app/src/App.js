import React, { useState } from 'react';

function App() {
  //61
  const transliterate = (text) => {
    const map = {
      "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", 
      "е": "e", "ё": "yo", "ж": "zh", "з": "z", "и": "i", 
      "й": "y", "к": "k", "л": "l", "м": "m", "н": "n", 
      "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", 
      "у": "u", "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", 
      "ш": "sh", "щ": "shch", "ъ": "", "ы": "y", "ь": "", 
      "э": "e", "ю": "yu", "я": "ya"
    };
    return text.split('').map(char => map[char.toLowerCase()] || char).join('');
  };
  const [text, setText] = useState('');

  // Задача 2
  const [numbers, setNumbers] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleNumbersChange = (event) => {
    setNumbers(event.target.value);
  };

  // Функция для расчета суммы чисел
  const calculateSum = () => {
    const numArray = numbers.split('\n').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    return numArray.reduce((acc, curr) => acc + curr, 0);
  };


  //62
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    if (checked) {
      setMessage('Привет, пользователь!');
    } else {
      setMessage('До свидания!');
    }
  };


  //63
  const [checked1, setChecked1] = useState(false);

//64 
const [city, setCity] = useState('');

  function handleChange2(event) {
    setCity(event.target.value);
  }

  //65

  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург'];
  const [value, setValue] = useState('');

  const options = cities.map((city, index) => {
    return <option key={index} value={city}>{city}</option>;
  });

  return (

    <div>
    
 
<h2>61#1</h2>
<h3>Задача 1: Транслит</h3>
      <textarea value={text} onChange={handleTextChange} />
      <p>{transliterate(text)}</p>

      <h3>Задача 2: Сумма чисел</h3>
      <textarea value={numbers} onChange={handleNumbersChange} />
      <p>Сумма: {calculateSum()}</p>
<h2>62#1</h2>
<input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <button onClick={handleButtonClick}>Сообщение</button>
      <p>{message}</p>
<h2>63#1</h2>
<div>
      <input
        type="checkbox"
        checked={checked1}
        onChange={() => setChecked1(!checked1)}
      />
      {checked1 ? (
        <div>
          <h2>Ура, вам уже есть 18</h2>
          <p>Здесь расположен контент только для взрослых</p>
        </div>
      ) : (
        <div>
          <p>Увы, вам еще нет 18 лет :(</p>
        </div>
      )}
    </div>

    <h2>63#2</h2>
    <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked && <p>Этот абзац видим, когда чекбокс отмечен.</p>}
<h2>64#1</h2>
<select value={city} onChange={handleChange2}>
        <option value="">Выберите город</option>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Новосибирск">Новосибирск</option>
        <option value="Екатеринбург">Екатеринбург</option>
      </select>
      <p>Ваш выбор: {city}</p>
<h2>65#1</h2>
<select value={value} onChange={(event) => setValue(event.target.value)}>
        <option value="">Выберите город</option>
        {options}
      </select>
      <p>Ваш выбор: {value}</p>

    </div>
       
    
  );
}

export default App;
