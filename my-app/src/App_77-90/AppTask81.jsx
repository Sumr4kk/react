// Employee
import React from 'react';

function AppTask81({ lastName, firstName, middleName, salary }) {
    return (
        <div>
            <p>
                Фамилия: <span>{lastName}</span>, 
                Имя: <span>{firstName}</span>, 
                Отчество: <span>{middleName}</span>, 
                Зарплата: <span>{salary} руб.</span>
            </p>
        </div>
    );
}

export default AppTask81;
