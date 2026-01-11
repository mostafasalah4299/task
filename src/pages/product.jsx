import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const { category } = useParams();
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false); 

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchProducts = async () => {
            try {
                let url = 'https://fakestoreapi.com/products';
                if (category) {
                    url = https://fakestoreapi.com/products/category/${category};
                }
                const res = await axios.get(url);
                setProducts(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProducts();

        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => setCategories(res.data))
            .catch(err => console.error(err));
    }, [category]);

    const handleCategoryClick = (selectedCategory) => {
        if (selectedCategory === 'all') {
            navigate('/products');
        } else {
            navigate(/products/category/${selectedCategory});
        }
    };

    const addToCart = (product) => {
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
        <div className="container mt-4">
            <h2 className="text-center mb-4">Categories</h2>
            <div className="row justify-content-center mb-4">
                <div className="col-auto">
                    <ul className="list-inline">
                        <li className={list-inline-item badge ${!category ? 'bg-primary' : 'bg-secondary'} p-2 me-2 mb-2} style={{cursor: 'pointer'}} onClick={() => handleCategoryClick('all')}>All</li>
                        {categories.map((cat, index) => (
                            <li key={index} className={list-inline-item badge ${category === cat ? 'bg-primary' : 'bg-secondary'} p-2 me-2 mb-2} style={{cursor: 'pointer'}} onClick={() => handleCategoryClick(cat)}>
                                {cat}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <h2 className="text-center mb-4">Products</h2>
            <div className="row">
                {products.map(product => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                        <div className="card h-100">
                            <Link to={/product/${product.id}} className="text-decoration-none">
                                <img src={product.image} alt={product.title} className="card-img-top" style={{height: '200px', objectFit: 'contain'}} />
                            </Link>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text text-primary fw-bold">${product.price}</p>
                                <button className="btn btn-danger mt-auto" onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showNotification && (
                <div className="alert alert-success position-fixed bottom-0 end-0 m-3" style={{zIndex: 1000}}>
                    Item added to cart!
                </div>
            )}
        </div>
    );
}

export default Products;
