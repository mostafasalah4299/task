import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import "./products.css"

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
                    url = `https://fakestoreapi.com/products/category/${category}`;
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
            navigate(`/products/category/${selectedCategory}`);
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
        <div>
            <h2>Categories</h2>
            <ul className="categories-list">
                <li key="all" onClick={() => handleCategoryClick('all')} className={!category ? 'active' : ''}>All</li>
                {categories.map((cat, index) => (
                    <li key={index} onClick={() => handleCategoryClick(cat)} className={category === cat ? 'active' : ''}>
                        {cat}
                    </li>
                ))}
            </ul>
            <h2>Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <Link to={`/product-details/${product.id}`}>
                            <img src={product.image} alt={product.title} className="product-image" />
                            <div className="product-body">
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-price">${product.price}</p>
                            </div>
                        </Link>
                        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            {showNotification && (
                <div className="add-to-cart-notification">
                    Item added to cart!
                </div>
            )}
        </div>
    );
}

export default Products;