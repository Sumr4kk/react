import React, { useState } from 'react';
import AppTask79 from './App_77-90/AppTask79'
import AppTask80 from './App_77-90/AppTask80'
import AppTask81 from './App_77-90/AppTask81'
import Product from './App_77-90/AppTask82'
import User from './App_77-90/AppTask83'
import Users from './App_77-90/AppTask85'
import User4 from './App_77-90/AppTask87'
import User5 from './App_77-90/AppTask88'
import Users1 from './App_77-90/AppTask89'
import UserField from './App_77-90/AppTask90'

function App() {
//82
  const name1 = 'product1';
  const cost1 = '100';
  
  const name2 = 'product2';
  const cost2 = '200';
  
  const name3 = 'product3';
  const cost3 = '300';


  //83
  const users = [
    { id: 1, name: 'user1', surn: 'surn1', age: 30 },
    { id: 2, name: 'user2', surn: 'surn2', age: 31 },
    { id: 3, name: 'user3', surn: 'surn3', age: 32 },
];


//84
const result = users.map(user => {
  return (
      <User key={user.id} name={user.name} surn={user.surn} age={user.age} />
  );
});

//86


  return (
    <div>
      <h1>TASK#79</h1>
      <AppTask79/>
      <h1>TASK#80</h1>
      <AppTask80/>
      <h1>TASK#81</h1>
      <AppTask81/>
      <h1>TASK#82</h1>
      <Product name={name1} cost={cost1} />
      <Product name={name2} cost={cost2} />
      <Product name={name3} cost={cost3} />     
      
      <h1>TASK#83</h1>
      <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Возраст</th>
                </tr>
            </thead>
            <tbody>
                <User name={users[0].name} surn={users[0].surn} age={users[0].age} />
                <User name={users[1].name} surn={users[1].surn} age={users[1].age} />
                <User name={users[2].name} surn={users[2].surn} age={users[2].age} />
            </tbody>
        </table>
      <h1>TASK#84</h1>
      <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Возраст</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>

      <h1>TASK#85</h1>

      <Users/>
      <h1>TASK#86</h1>
      <Users/>
      <button>Забанить</button>
      
      <h1>TASK#87</h1>
      <User4/>
      <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Возраст</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>

      <h1>TASK#88</h1>
      <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Возраст</th>
                </tr>
            </thead>
            <tbody>
                {result}
            </tbody>
        </table>

      <User5/>
      
      <h1>TASK#89</h1>
      
      <Users1/>
      
      <h1>TASK#90</h1>
      
      <UserField/>

    </div>
  );
}

export default App;
