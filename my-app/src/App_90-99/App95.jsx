import React, { useState } from 'react';

// Компонент TempInp для ввода температуры
function TempInp({ temp, setTemp }) {
    const handleChange = (event) => {
        // Изменяем температуру при вводе
        setTemp(event.target.value);
    };

    return (
        <div>
            <label>
                Введите температуру (°C):
                <input
                    type="number"
                    value={temp}
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}

// Компонент Verdict для отображения состояния воды
function Verdict({ temp }) {
    let verdict;

    if (temp < 0) {
        verdict = "Вода твердая";
    } else if (temp >= 0 && temp <= 100) {
        verdict = "Вода жидкая";
    } else {
        verdict = "Вода газообразная";
    }

    return <p>{verdict}</p>;
}

// Основной компонент Calculator
function Calculator() {
    const [temp, setTemp] = useState(0);

    return (
        <div>
            <Verdict temp={temp} />
            <TempInp temp={temp} setTemp={setTemp} />
        </div>
    );
}

export default Calculator;
