import React from 'react';
import {Card} from 'react-bootstrap';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    return (
        <Card className="mt-3 p-2 cart-card">
            <p>Courses ordered:{cart.length}</p>
            <h4>Total:${total}
            </h4>
        </Card>
    );
};

export default Cart;