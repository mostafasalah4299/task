import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./productdetail.css"
function Productdetails() {
    const [product, setProduct] = useState([]);
    const [showNotification, setShowNotification] = useState(false); 
    const params = useParams()
    const id = params.id;
    const navigate = useNavigate();

    console.log(id)
    useEffect(
        () => {
            window.scrollTo(0,0);
            axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))


        }, [id]
    )
    console.log(product)

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        setShowNotification(true); 
        setTimeout(() => {
            setShowNotification(false); 
        }, 3000); 
    };

    return (
        <>
        <div className='container'>
        <div className='row'>
            <div className='col-6'>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className='col-6'>
                                <div className='hamada'>
                                    <div className='product-body'>

                                        <h1>{product.title}</h1>
                                        <p>{product.description}</p>
                                        <p className="product-price">{product.price} EGP</p>

                                    </div>
                                    <div className='product-actions'>
                                        <button onClick={addToCart}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
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
export default Productdetails;