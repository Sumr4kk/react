import React, { useState } from 'react';
import Calculator from './App_90-99/App95'
import './App.css'

function App() {
  //96
  const [fahrenheit, setFahrenheit] = useState(32);

  const celsius = ((fahrenheit - 32) * 5) / 9;

  const handleFahrenheitChange = (event) => {
    setFahrenheit(parseFloat(event.target.value));
  };

  const handleCelsiusChange = (event) => {
    setFahrenheit(((parseFloat(event.target.value) * 9) / 5) + 32);
  };


  return (
    <div>
      <h1>TASK#92</h1>
      <div>
        <p>• isEdit: Стейт</p>
         <p> • elem: Переменная</p>  
          <p>• data: Стейт или Пропс (в зависимости от контекста использования)</p>  </div>
      <h1>TASK#93</h1>
      
1. Products:

<p></p> • Тип: Компонент-контейнер.

<p></p> • Обоснование: Этот компонент, скорее всего, управляет состоянием списка продуктов (например, загружает данные из API или хранит их в стейте) и передает эти данные дочерним компонентам (например, Product).

<p></p> 2. Product:

<p></p> • Тип: Презентационный компонент.

<p></p> • Обоснование: Этот компонент, скорее всего, отвечает за отображение информации о конкретном продукте, получая данные через пропсы от родительского компонента (Products). Он не управляет состоянием данных.

<p></p> 3. ProductField:

<p></p> • Тип: Презентационный компонент.

<p></p> • Обоснование: Этот компонент, вероятно, отвечает за отображение конкретного поля продукта (например, название, цена и т.д.) и также получает данные через пропсы. Как и Product, он не управляет состоянием данных.
    
<h1>TASK#94</h1>
<h1>Объяснение потока данных в компонентах</h1>
            <h2>Компоненты:</h2>
            <ul>
                <li><strong>Products</strong>: Родительский компонент, который хранит состояние списка продуктов.</li>
                <li><strong>Product</strong>: Компонент-потомок, который отображает информацию о конкретном продукте и управляет его состоянием.</li>
                <li><strong>ProductField</strong>: Компонент, который отвечает за отображение полей ввода для имени и цены продукта.</li>
            </ul>

            <h2>Нисходящий поток данных (Top-Down)</h2>
            <p>
                Данные передаются от родительского компонента <strong>Products</strong> к дочерним компонентам:
            </p>
            <ol>
                <li>
                    Компонент <strong>Products</strong> создает массив продуктов и хранит его в своем состоянии.
                </li>
                <li>
                    Для каждого продукта в массиве <strong>Products</strong> рендерится компонент <strong>Product</strong>, которому передаются данные о продукте через пропсы.
                </li>
                <li>
                    Компонент <strong>Product</strong> получает данные о продукте (например, имя и цену) и передает их дальше в компонент <strong>ProductField</strong> для отображения.
                </li>
            </ol>

            <h2>Восходящий поток данных (Bottom-Up)</h2>
            <p>
                Данные также могут возвращаться от дочерних компонентов к родительским:
            </p>
            <ol>
                <li>
                    Когда пользователь вводит данные в поле <strong>ProductField</strong>, вызывается функция, переданная через пропсы из компонента <strong>Product</strong>.
                </li>
                <li>
                    Эта функция обновляет локальное состояние компонента <strong>Product</strong>, а затем вызывает функцию <strong>onUpdate</strong>, переданную из компонента <strong>Products</strong>, чтобы обновить список продуктов.
                </li>
                <li>
                    В результате изменения состояния в родительском компоненте <strong>Products</strong>, все дочерние компоненты автоматически перерисовываются с новыми данными.
                </li>
            </ol>

            <h1>TASK#95</h1>
          <Calculator/>
          <h1>TASK#96</h1>
          <div>
        <label>
          Fahrenheit:
          <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
        </label>
      </div>
      <div>
        <label>
          Celsius:
          <input type="number" value={celsius} onChange={handleCelsiusChange} />
        </label>
      </div>

      <h1>TASK#98</h1>
      <div className="container">
      <button className="button primary">Кнопка 1</button>
      <button className="button secondary">Кнопка 2</button>
    </div>
    </div>
  );
}

export default App;
