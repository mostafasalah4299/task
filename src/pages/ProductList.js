import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './ProductList.css';
import { Link, useNavigate } from 'react-router-dom';
import "./productdetail.css"

function ProductList() {
    const [product, setProduct] = useState([]);
    const [showNotification, setShowNotification] = useState(false);
    const navigate = useNavigate();

    useEffect(
        () => {
            axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log('data', res)
                setProduct(res.data)
            })
        }, []
    )

    const addToCart = (productToAdd) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);

        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...productToAdd, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <>
        <h2>Product List</h2>
        <div className='container'>

            <div className="row">
                {product.map((item) => (
                    <div className="col-4" key={item.id}>
                        <div className='product-card'>
                            <div className='product-img'>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className='product-body'>

                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <p className="product-price">{item.price} EGP</p>

                            </div>
                            <div className='product-actions'>
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                                <Link to={`/product/${item.id}`}>View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {showNotification && (
            <div className="add-to-cart-notification">
                Item added to cart!
            </div>
        )}
        </>
    );
}
export default ProductList;