import React, { useState, useEffect }from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Write from './components/Write';
import Navbar from './components/Navbar';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Logique pour vérifier si l'utilisateur est authentifié
        // Par exemple, vérifier un token dans le localStorage
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <Router>
            <div>
                <Navbar isAuthenticated={isAuthenticated} />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/write" element={<Write />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;