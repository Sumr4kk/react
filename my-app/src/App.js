import React, { useState } from 'react';

function App() {
  //66
  const [value, setValue] = useState('');

//67

const [language, setLanguage] = useState('');

  const changeHandler = (event) => {
    setLanguage(event.target.value);
  };

//69
const [value1, setValue1] = useState('text');
const [checked, setChecked] = useState(true);

//70

const initDate = {
  year: 2025,
  month: 12,
  day: 31,
};

const [date, setDate] = useState(initDate);

const handleChange = (field, event) => {
  const newValue = Number(event.target.value);
  setDate({
    ...date,
    [field]: newValue,
  });
};

const getDayOfWeek = () => {
  const dateObj = new Date(date.year, date.month - 1, date.day); // месяц в JavaScript начинается с 0
  const options = { weekday: 'long' }; // форматируем день недели
  return dateObj.toLocaleDateString('ru-RU', options);
};



  return (

    <div>
    <h2>66#1</h2>
    <select value={value} onChange={(event) => setValue(event.target.value)}>
        <option value="">Выберите возрастную группу</option>
        <option value="0-12">От 0 до 12 лет</option>
        <option value="13-17">От 13 до 17 лет</option>
        <option value="18-25">От 18 до 25 лет</option>
        <option value="25+">Старше 25 лет</option>
      </select>
      <p>
        {value === '0-12' && 'Вы выбрали возрастную группу: от 0 до 12 лет'}
        {value === '13-17' && 'Вы выбрали возрастную группу: от 13 до 17 лет'}
        {value === '18-25' && 'Вы выбрали возрастную группу: от 18 до 25 лет'}
        {value === '25+' && 'Вы выбрали возрастную группу: старше 25 лет'}
      </p>

    <h2>68#1</h2>
    <h3>Выберите ваш любимый язык программирования:</h3>
      <input
        type="radio"
        name="language"
        value="JavaScript"
        checked={language === 'JavaScript'}
        onChange={changeHandler}
      />
      JavaScript
      <br />
      <input
        type="radio"
        name="language"
        value="Python"
        checked={language === 'Python'}
        onChange={changeHandler}
      />
      Python
      <br />
      <input
        type="radio"
        name="language"
        value="Java"
        checked={language === 'Java'}
        onChange={changeHandler}
      />
      Java
      <br />
      <p>
        Вы выбрали: {language}
      </p>
      {language === 'JavaScript' && <p>Отличный выбор, JavaScript - это классно!</p>}
    

    <h2>69#1</h2>
    <input defaultValue={value1} />
    <input type="checkbox" defaultChecked={checked} />

    <h2>71#1</h2>
    <p>Год: {date.year}, Месяц: {date.month}, День: {date.day}, День недели: {getDayOfWeek()}</p>
      
      <h3>Редактировать дату:</h3>
      <input 
        type="number" 
        value={date.year} 
        onChange={(e) => handleChange('year', e)} 
        placeholder="Год"
      />
      <input 
        type="number" 
        value={date.month} 
        onChange={(e) => handleChange('month', e)} 
        placeholder="Месяц"
      />
      <input 
        type="number" 
        value={date.day} 
        onChange={(e) => handleChange('day', e)} 
        placeholder="День"
      />


    <h2>72#1</h2>
Да
    </div>
       
    
  );
}

export default App;
