import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import WeatherForecast from './components/Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/weatherforecast" element={<WeatherForecast />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
