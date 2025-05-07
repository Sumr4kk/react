// User.js
import React from 'react';

function User({ name, surn, age }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{surn}</td>
            <td>{age}</td>
        </tr>
    );
}

export default User;
