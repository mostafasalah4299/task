import React, { useEffect, useState } from 'react';

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
        <div className="container my-5">
            <h2 className="text-center mb-4">Your Cart Details</h2>

            {cartItems.length === 0 ? (
                <div className="text-center">
                    <p className="fs-4">Your cart is empty.</p>
                </div>
            ) : (
                <>
                <div className="row g-3">
                    {cartItems.map(item => (
                        <div key={item.id} className="col-12">
                            <div className="card shadow-sm position-relative">
                                <div className="card-body">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                            <img src={item.image} alt={item.title} className="img-fluid rounded" style={{maxHeight: '80px', objectFit: 'contain'}} />
                                        </div>
                                        <div className="col-md-8">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text mb-1">Price: ${item.price.toFixed(2)}</p>
                                            <p className="card-text">Quantity: {item.quantity}</p>
                                        </div>
                                        <div className="col-md-2 text-end">
                                            <button onClick={() => removeItem(item.id)} className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2">X</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body text-end">
                                <h4 className="card-title">Total: ${total.toFixed(2)}</h4>
                                <button className="btn btn-success btn-lg">Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}
        </div>
    );
}

export default CartDetails;
