import React, { useEffect, useState } from 'react';
import './CartDetails.css';

function CartDetails() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-details-container">
        <h2>Your Cart Details</h2>

        {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            <>
            {cartItems.map(item => (
                <div key={item.id} className="cart-item-card">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => removeItem(item.id)} className="remove-item-x-button">X</button>
                </div>
                </div>
            ))}

            <div className="cart-total">
                Total: ${total.toFixed(2)}
            </div>

            <button className="checkout-button">
                Proceed to Checkout
            </button>
            </>
        )}
        </div>
    );
    }

    export default CartDetails;