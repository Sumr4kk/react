// Users.js
import React, { useState } from 'react';
import User from './AppTask83';

const initUsers = [
    { id: 1, name: 'user1', surname: 'surn1', age: 30 },
    { id: 2, name: 'user2', surname: 'surn2', age: 31 },
    { id: 3, name: 'user3', surname: 'surn3', age: 32 },
];

function Users1() {
    const [users, setUsers] = useState(initUsers);
    const [editId, setEditId] = useState(null);

    const changeField = (id, field, event) => {
        setUsers(users.map(user => {
            if (user.id === id) {
                return { ...user, [field]: event.target.value };
            }
            return user;
        }));
    };

    const toggleMode = (id) => {
        setEditId(editId === id ? null : id);
    };

    const rows = users.map(user => (
        <User
            key={user.id}
            id={user.id}
            name={user.name}
            surname={user.surname}
            age={user.age}
            isEdit={editId === user.id}
            changeField={changeField}
            toggleMode={toggleMode}
        />
    ));

    return (
        <div>
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export default Users1;
