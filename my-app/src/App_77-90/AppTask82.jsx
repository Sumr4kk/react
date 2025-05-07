// Product
import React from 'react';

function Product({ name, cost }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Цена: {cost} руб.</p>
        </div>
    );
}

export default Product;
