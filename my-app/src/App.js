import React from 'react';

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

  return (
    <div className={attr}>
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

<h2>31#1</h2>
<h2>32#1</h2>
<h2>33#1</h2>
<h2>34#1</h2>
<h2>35#1</h2>
<h2>36#1</h2>
<h2>37#1</h2>
<h2>38#1</h2>
<h2>39#1</h2>
<h2>40#1</h2>
<h2>41#1</h2>
<h2>42#1</h2>
<h2>43#1</h2>
<h2>44#1</h2>
<h2>45#1</h2>
<h2>46#1</h2>
<h2>47#1</h2>
<h2>48#1</h2>
<h2>49#1</h2>
<h2>50#1</h2>
<h2>51#1</h2>
<h2>52#1</h2>
<h2>53#1</h2>
<h2>54#1</h2>
<h2>55#1</h2>
<h2>56#1</h2>
<h2>57#1</h2>
<h2>58#1</h2>
<h2>59#1</h2>
<h2>60#1</h2>
<h2>61#1</h2>
<h2>62#1</h2>
<h2>63#1</h2>
<h2>64#1</h2>
<h2>65#1</h2>
<h2>66#1</h2>
<h2>67#1</h2>
<h2>68#1</h2>
<h2>69#1</h2>
<h2>70#1</h2>
<h2>71#1</h2>
<h2>72#1</h2>
<h2>73#1</h2>
<h2>74#1</h2>
<h2>75#1</h2>
<h2>76#1</h2>
<h2>77#1</h2>
<h2>78#1</h2>
<h2>79#1</h2>
<h2>80#1</h2>
<h2>81#1</h2>
<h2>82#1</h2>
<h2>83#1</h2>
<h2>84#1</h2>
<h2>85#1</h2>
<h2>86#1</h2>
<h2>87#1</h2>
<h2>88#1</h2>
<h2>89#1</h2>
<h2>90#1</h2>
<h2>91#1</h2>
<h2>92#1</h2>
<h2>93#1</h2>
<h2>94#1</h2>
<h2>95#1</h2>
<h2>96#1</h2>
<h2>97#1</h2>
<h2>98#1</h2>
<h2>99#1</h2>
<h2>100#1</h2>



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
