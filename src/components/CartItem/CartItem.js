import React from 'react';
import {Card} from 'react-bootstrap';
import './CartItem.css';

const CartItem = (props) => {
    const cart = props.cart;
    return (
        <article className="my-1">
            <Card className="flex-row justify-content-center align-items-center p-2">
                <figure><img src={cart.img} alt="" className="img-fluid d-block mx-auto cart-img"/></figure>
                <div className="ml-3">
                    <h6>{cart.name}</h6>
                    <p>${cart.price}</p>
                </div>
            </Card>
        </article>
    );
};

export default CartItem;