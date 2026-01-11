import React, { useState } from 'react';
import './Signin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
    const navigate = useNavigate();
    const [usernameOrEmail, setUsernameOrEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const credentials = { username: usernameOrEmail, password: password };
            const response = await axios.post('https://fakestoreapi.com/auth/login', credentials);
            console.log(response.data);

            if (response.data && response.data.token) {
                localStorage.setItem('userToken', response.data.token);
                navigate('/');
            } else {
                setError('Login failed: No token received.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-form-card">
                <h2>Sign In Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="usernameOrEmail">Username or Email:</label> 
                        <input
                            type="text"
                            id="usernameOrEmail"
                            name="usernameOrEmail" 
                            value={usernameOrEmail}
                            onChange={(e) => setUsernameOrEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="signin-button">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Signin;