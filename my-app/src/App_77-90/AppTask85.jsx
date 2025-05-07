
import React, { useState } from 'react';
import User from './AppTask83';

const initUsers = [
    { id: 1, name: 'user1', surname: 'surn1', age: 30 },
    { id: 2, name: 'user2', surname: 'surn2', age: 31 },
    { id: 3, name: 'user3', surname: 'surn3', age: 32 },
];

function Users() {
    const [users, setUsers] = useState(initUsers);
    
    const items = users.map(user => {
        return (
            <User
                key={user.id}
                name={user.name}
                surname={user.surname}
                age={user.age}
            />
        );
    });

    return (
        <div>
            {items}
        </div>
    );
}

export default Users;
