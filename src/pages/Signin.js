    import React from 'react';
    import './Signin.css';
    import { useNavigate } from 'react-router-dom';

    function Signin() {
        const navigate = useNavigate();
        const handleSubmit = (e) => {
            e.preventDefault();
            navigate('/');
        };
    return (
        <div className="signin-container">
        <div className="signin-form-card">
            <h2>Sign In Page</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit" className="signin-button">Sign In</button>
            </form>
        </div>
        </div>
    );
    }

    export default Signin;