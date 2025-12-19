import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router';

function Home() {
    const [product, setProduct] = useState([]);
    useEffect(
        () => {
            axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log('data', res)
                setProduct(res.data)
            })
        }
    )
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
                                <button>Add to Cart</button>
                                <Link to={`/product/${item.id}`}>View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        </>
    );
}
export default Home;