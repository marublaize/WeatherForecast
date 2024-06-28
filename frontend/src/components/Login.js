import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [weatherForecast, setWeatherForecast] = useState([]);
    const [token, setToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7175/Auth/login', { email, password });
            if (response.status === 200) {
                alert('Login successful');
                const { token } = response.data;
                setToken(token);
                fetchWeatherForecast(token);
            } else {
                alert('Authentication failed');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    const fetchWeatherForecast = async (token) => {
        try {
            const response = await axios.get('http://localhost:7175/weatherforecast', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setWeatherForecast(response.data);
        } catch (error) {
            alert('Failed to fetch weather forecast.');
        }
    };    

return (
    <div className="login-container">
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
        </form>
            <div>
                <h2>Weather Forecast</h2>
                <ul>
                    {weatherForecast.map((forecast, index) => (
                        <li key={index}>
                            Date: {forecast.date}, Temperature: {forecast.temperatureF}°F, Summary: {forecast.summary}
                        </li>
                    ))}
                </ul>
            </div>
    </div>
);
};

export default Login;