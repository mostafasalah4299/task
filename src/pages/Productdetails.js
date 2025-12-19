import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import "./productdetail.css"
function Productdetails() {
    const [product, setProduct] = useState([]);
    const params = useParams()
    const id = params.id;
    console.log(id)
    useEffect(
        () => {
            axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            

        }
    )
    console.log(product)
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
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
        </div>
        </div>
        </>
    );
}
export default Productdetails;  