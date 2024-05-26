import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({ isAuthenticated }) => {
    return (
        <nav>
            <ul>
            <li><Link to="/home">Home</Link></li>
                {isAuthenticated ? (
                    <li><Link to="/write">Write</Link></li>
                ) : (
                    <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;  