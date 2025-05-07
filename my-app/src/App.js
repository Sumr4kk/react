import React from 'react';
import './App.css';
import { nanoid } from 'nanoid';

function App() {
  // 34
	function showNumber(number) {
    alert(number);
  }
// 35
  function handleClick(event) {
    console.log(event); 
  }  
  function handleClick1(event) {
    console.log(event.target); // выводит элемент, на который был совершен клик
  }
// 36 // 1
function func(event) {
  console.log(event);
}
//2
function func1(arg, event) {
  console.log(arg, event);
}
//3
function func2(event, arg) {
  console.log(event, arg);
}
//4
function func3(arg1, event, arg2) {
  console.log(arg1, event, arg2);
}
//37
const arr = [
  <li>1</li>,
  <li>2</li>,
  <li>3</li>,
  <li>4</li>,
  <li>5</li>,
];

//38

const arr1 = [];
  
for (let i = 1; i <= 5; i++) {
  arr1.push(<li>{i}</li>);
}

//39

const arr2 = ['a', 'b', 'c', 'd', 'e'];
  
const res = arr2.map(function(item) {
  return <li>{item}</li>;
});

//40

const res1 = arr2.map(function(item, index) {
  return <li key={index}>{item}</li>;
});


//41

const users = [
  {name: 'user1', surn: 'surn1', age: 30},
  {name: 'user2', surn: 'surn2', age: 31},
  {name: 'user3', surn: 'surn3', age: 32},
];
const listItems = users.map(function(user, index) {
  return (
    <li key={index}>
      <span>{user.name}</span>, 
      <span>{user.surn}</span>, 
      <span>{user.age}</span> years old
    </li>
  );
});

//42

const listItems1 = users.map(function(user) {
  return (
    <li key={user.id}>
      <span>{user.name}</span>, 
      <span>{user.surn}</span>, 
      <span>{user.age}</span> years old
    </li>
  );
});

//43
const rows = users.map(function(user) {
  return (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.surn}</td>
      <td>{user.age}</td>
    </tr>
  );
});

//47
const randomId = nanoid(); // Генерация случайного ID
//48
function id() {
  return nanoid();
}

//49
const users3 = [
  { id: id(), name: 'User1', age: 25 },
  { id: id(), name: 'User2', age: 30 },
  { id: id(), name: 'User3', age: 22 },
];

console.log(users3);

  return (
    <div>
<h2>34#1</h2>
<button onClick={() => showNumber(1)}>act1</button>
<button onClick={() => showNumber(2)}>act2</button>
<button onClick={() => showNumber(3)}>act3</button>
<h2>35#1</h2>
<button onClick={handleClick}>Кликни меня</button>
<h2>35#2</h2>
<button onClick={handleClick1}>Кликни меня</button>
<h2>36#1</h2>
<button onClick={() => func('eee')}>act</button>
<h2>36#2</h2>
<button onClick={event => func1('eee', event)}>act</button>
<h2>36#3</h2>
<button onClick={event => func2(event, 'eee')}>act</button>
<h2>36#4</h2>
<button onClick={event => func3('firstArg', event, 'thirdArg')}>act</button>
<h2>37#1</h2>
<ul>{arr}</ul>

<h2>38#1</h2>
<ul>{arr1}</ul>

<h2>39#1</h2>
<ul>{res}</ul>

<h2>40#1</h2>
<ul>{res1}</ul>

<h2>41#1</h2>
<ul>{listItems}</ul>

<h2>42#1</h2>
<ul>{listItems1}</ul>

<h2>43#1</h2>
<table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Возраст</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>

<h2>47#1</h2>
    <div>
      <p>Сгенерированный ID с помощью nanoid: {randomId}</p>
    </div>
  
<h2>48#1</h2>
Функция для генерации id: {id()}

<h2>49#1</h2>
Смотри консоль.
console.log(users);
 
    </div>
  );
}


export default App;