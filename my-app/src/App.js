import React from 'react';
import './App.css';
  
function App() {
  const attr = 'block';
  const str = <p>text</p>;
  const str1 = 'text1';
  const str2 = 'text2';
  const name1 = 'user';
  const age = '30';
  const arr = [1, 2, 3, 4, 5];
  const obj = { names: 'john', surname: 'smit' };
  const li1 = <li>text1</li>;
  const li2 = <li>text2</li>;
  const li3 = <li>text3</li>;
  const items = <ul><li>text1</li><li>text2</li><li>text3</li></ul>;
  const age2 = 19;
     
  let text4, text5;
  const isAdult = false; 
  	if (isAdult) {
		text4 = <p>Вы совершеннолетний</p>;
	}
    else {
		text5 = <p>Вы несовершеннолетний</p>;
	}

  const isAdmin = true;
  let text_1, text_2;
  if (isAdmin) {
		text_1 = <p>yoy are admin</p>;
	} else {
		text_2 = <p>you is not admin</p>;
	}

const isAuth = true;
const isAuth2 = true;

function getDigitsSum(str){
  let sum = 0;
  for (let i = 0; i < str.length; i++){
    sum += parseInt(str[i])
  }
   return sum;
}

const sum = getDigitsSum("123")

function show1() {
  alert(1);
}

function show2() {
  alert(2);
}


  return (
    <div className={attr}>
      <h2>1-12 TASKS</h2>
      <ul>
        <li>I’m beginning to feel like a Rap God, Rap God</li>
        <li>All my people from the front to the back nod, back nod</li>
        <li>Now who thinks their arms are long enough to slapbox, slapbox?</li>
        <li>They said I rap like a robot, so call me Rapbot</li>
        {/* Повторяющиеся элементы можно вынести в отдельный компонент */}
      </ul>

      <ul>
        <li>text1</li>
        <li>text2</li>
        <li>text3</li>
      </ul>

      <ul>
        <li>text1</li>
        <li>text2</li>
        <li>text3</li>
      </ul>

      <p>Через return можно возвращать несколько тегов если они будут внутри конструкции &lt;&gt;&lt;/&gt;</p>

      <h2>13#1</h2>
      <p>{str1}</p>
      <p>{str2}</p>

      <h2>14#1</h2>
      <p>name: {name1}</p>
      <p>age: {age}</p>

      <h2>15#1</h2>
<ul>
  <li>{arr[0]}</li>
  <li>{arr[1]}</li>
  <li>{arr[2]}</li>
  <li>{arr[3]}</li>
  <li>{arr[4]}</li>
</ul>

      <h2>16#1</h2>
      <p>
        name: <span>{obj.names}</span> <br />
        surname: <span>{obj.surname}</span>
      </p>

      <h2>18#1</h2>
      <p>{str}</p>
      <h2>19#1</h2> 
	  <ul>
	{li1}
	{li2}
	{li3}
     </ul>
	 <h2>20#1</h2>
		{items}
	<h2>21#1</h2>
<p>Константы с тегами можно возвращать через return к примеру return str</p>
<h2>22#1</h2>
<input/><br/> 
<h2>23#1</h2>
<ul>
				<li>Элемент 1</li>
				<li>Элемент 2</li>
				<li>Элемент 3</li>
				<li>Элемент 4</li>
				<li>Элемент 5</li>
				<li>Элемент 6</li>
				<li>Элемент 7</li>
				<li>Элемент 8</li>
				<li>Элемент 9</li>
				<li>Элемент 10</li>
			</ul>
<h2>23#2</h2>
<table>
				<tbody>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
					</tr>
					<tr>
						<td>4</td>
						<td>5</td>
						<td>6</td>
					</tr>
					<tr>
						<td>7</td>
						<td>8</td>
						<td>9</td>
					</tr>
				</tbody>
			</table>

<h2>24#1</h2>

<p>result: 9</p>
<p>result: john smit</p>
<p>result: 2</p>

<h2>26#1</h2>
{text5}

<h2>27#1</h2>
{text_1}
<h2>28#1</h2>
{age2 > 18 ? 'Есть 18' : 'Нет 18-ти'}
<h2>29#1</h2>
{isAuth && <p>вы авторизованы</p>}
<h2>30#1</h2>
{!isAuth2 && <p>вы авторизованы</p>}
<p>Условие False(если не авторизован !isAuth2)</p>

<h2>31#1</h2>
<p>Сумма цифр числа 123 равна {sum} </p>

<h2>32#1</h2>
<p>Сумма цифр числа 12345 = {getDigitsSum("12345")}</p>

<h2>33#1</h2>
<div>
      <button onClick={show1}>show1</button>
      <button onClick={show2}>show2</button>
    </div>



      {/* Примеры использования пустых тегов */}
      {/* 
      11. Можно возвращать тег, который не нужно закрывать вот так: 
      function App() {
        return <input />;
      } 
      
      12. Возвращение пустого тега делаем так 
      function App() {
        return <div />;
      }
      */}
    </div>
  );
}

export default App;
