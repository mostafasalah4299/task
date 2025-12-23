    import React, { useEffect, useState } from 'react';
    import './CartDetails.css';
    import axios from 'axios';

    function CartDetails() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/carts/1')
        .then(async res => {
            const products = res.data.products;

            const detailedProducts = await Promise.all(
            products.map(async item => {
                const productRes = await axios.get(
                `https://fakestoreapi.com/products/${item.productId}`
                );
                return {
                ...productRes.data,
                quantity: item.quantity
                };
            })
            );

            setCartItems(detailedProducts);
        });
    }, []);

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
