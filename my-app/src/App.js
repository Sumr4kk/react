import React, { useState } from 'react';

function App() {
  //56
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

//57
const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }
//58
const [age, setAge] = useState('');

function handleChange1(event) {
  setAge(event.target.value);
}
const currentYear = new Date().getFullYear();
const birthYear = age ? currentYear - age : '';

//59
const [fahrenheit, setFahrenheit] = useState('');

  function handleChange2(event) {
    setFahrenheit(event.target.value);
  }

  const celsius = fahrenheit ? (fahrenheit - 32) * 5 / 9 : '';


const [values, setValues] = useState(Array(5).fill(0));

function handleChange3(index, event) {
  const newValues = [...values];
  newValues[index] = +event.target.value;
  setValues(newValues);
}

const average = values.reduce((a, b) => a + b, 0) / values.length;

//60
 // Задача 1
 const [value11, setValue11] = useState(0);
 const [value22, setValue22] = useState(0);
 const [result, setResult] = useState(0);

 const handleSum = () => {
   setResult(Number(value1) + Number(value2));
 };

 const handleProduct = () => {
   setResult(Number(value1) * Number(value2));
 };

 // Задача 2
 const [date1, setDate1] = useState('');
 const [date2, setDate2] = useState('');
 const [dateDifference, setDateDifference] = useState(0);

 const handleDateDifference = () => {
   const diffTime = Math.abs(new Date(date2) - new Date(date1));
   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
   setDateDifference(diffDays);
 };

 // Задача 3
 const currentDate = new Date().toISOString().split('T')[0];
 const [dateWithDefault1, setDateWithDefault1] = useState(currentDate);
 const [dateWithDefault2, setDateWithDefault2] = useState(currentDate);

 // Задача 4
 const [numberInput, setNumberInput] = useState('');
 const [sumOfDigits, setSumOfDigits] = useState(0);

 const handleBlurSum = () => {
   const sum = numberInput.split('').reduce((acc, digit) => acc + Number(digit), 0);
   setSumOfDigits(sum);
 };

 // Задача 5
 const [divisorInput, setDivisorInput] = useState('');
 const [productOfDivisors, setProductOfDivisors] = useState(1);

 const handleBlurProduct = () => {
   const num = Number(divisorInput);
   let product = 1;
   for (let i = 1; i <= num; i++) {
     if (num % i === 0) {
       product *= i;
     }
   }
   setProductOfDivisors(product);
 };




  return (

    <div>
    
 
    
<h2>56#1</h2>
<input
        value={value1}
        onChange={event => setValue1(event.target.value)}
      />
      <p>Первый инпут: {value1}</p>

      <input
        value={value2}
        onChange={event => setValue2(event.target.value)}
      />
      <p>Второй инпут: {value2}</p>

<h2>57#1</h2>
<input value={inputValue} onChange={handleChange} />
<p>Количество символов: {inputValue.length}</p>

<h2>58#1</h2>
<input value={age} onChange={handleChange1} placeholder="Введите ваш возраст" />
<p>Ваш год рождения: {birthYear}</p>
<h2>58#2</h2>
<input value={fahrenheit} onChange={handleChange2} placeholder="Введите температуру в Фаренгейтах" />
<p>Температура в Цельсиях: {celsius}</p>

<h2>59#1</h2>
{values.map((value, index) => (
        <input
          key={index}
          value={value}
          onChange={(event) => handleChange3(index, event)}
        />
      ))}
      <p>Среднее арифметическое: {average}</p>


<h2>60#1</h2>
      <input value={value1} onChange={e => setValue1(e.target.value)} />
      <input value={value2} onChange={e => setValue2(e.target.value)} />
      <button onClick={handleSum}>Сумма</button>
      <button onClick={handleProduct}>Произведение</button>
      <p>Результат: {result}</p>

      <h2>60#2</h2>
      <input value={date1} onChange={e => setDate1(e.target.value)} type="date" />
      <input value={date2} onChange={e => setDate2(e.target.value)} type="date" />
      <button onClick={handleDateDifference}>Разница в днях</button>
      <p>Разница в днях: {dateDifference}</p>

      <h2>60#3</h2>
      <input value={dateWithDefault1} onChange={e => setDateWithDefault1(e.target.value)} type="date" />
      <input value={dateWithDefault2} onChange={e => setDateWithDefault2(e.target.value)} type="date" />
      <button onClick={handleDateDifference}>Разница в днях</button>
      <p>Разница в днях: {dateDifference}</p>

      <h2>60#4</h2>
      <input value={numberInput} onBlur={handleBlurSum} onChange={e => setNumberInput(e.target.value)} />
      <p>Сумма цифр: {sumOfDigits}</p>

      <h2>60#5</h2>
      <input value={divisorInput} onBlur={handleBlurProduct} onChange={e => setDivisorInput(e.target.value)} />
      <p>Произведение делителей: {productOfDivisors}</p>
<h2>61#1</h2>

<h2>62#1</h2>

<h2>63#1</h2>

<h2>64#1</h2>

<h2>65#1</h2>


    </div>

    
  );
}

export default App;
