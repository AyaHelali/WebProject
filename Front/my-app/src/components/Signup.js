import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import de Link et useNavigate
import './Signup.css'; // Import du fichier CSS

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook de navigation

    const handleSubmit = (e) => {
        e.preventDefault();

        const signupData = {
            username: username,
            password: password
        };

        fetch('http://localhost:3001/signup.php', { // Remplacez 'your_project_path' par le chemin de votre projet
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('User registered successfully');
                navigate('/login'); // Redirection vers la page de login
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error: ' + error);
        });
    };

    return (
        <div className="form-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <table className="form-table">
                    <tbody>
                        <tr>
                            <td className="form-label"><label>Username:</label></td>
                            <td>
                                <input 
                                    className="form-input"
                                    type="text" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="form-label"><label>Password:</label></td>
                            <td>
                                <input 
                                    className="form-input"
                                    type="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="form-button" type="submit">Signup</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <span>
                                    Vous avez déjà un compte ? <Link to="/login">S'authentifier</Link>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Signup;