import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import de Link et useNavigate depuis react-router-dom
import './Login.css'; // Import du fichier CSS

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Utiliser useNavigate pour la redirection

    const handleSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            username,
            password
        };

        axios.post('http://localhost:3001/Login.php', loginData)
            .then(response => {
                const data = response.data;
                if (data.status === 'success') {
                    // Stocker les informations d'authentification (par exemple, un token) dans localStorage
                    localStorage.setItem('userId', data.user_id);
                    // Rediriger vers la page d'accueil ou une autre page
                    navigate('/');
                } else {
                    // Gérer les erreurs de connexion
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
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
                                <button className="form-button" type="submit">Login</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <span>
                                    Vous n'avez pas encore un compte ? <Link to="/signup">Inscrivez-vous</Link>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Login;