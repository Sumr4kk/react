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
