import React, { useState } from 'react';
import axios from 'axios';
import './Write.css';

const Write = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [post_id, setPostId] = useState(null); 

    const handleUpdate = (post_id, title, content, category) => {
        const updatedData = {
            post_id: post_id,
            title,
            content,
            category
        };

        axios.post('http://localhost/your_backend_path/update_post.php', updatedData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleDelete = () => {
        const postData = { post_id : post_id};

        axios.post('http://localhost/your_backend_path/delete_post.php', postData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour soumettre le post au back-end (via fetch ou axios)
    };

    return (
        <div className="write-container">
            <h2>Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Title:</label>
                    <input 
                        className="form-input"
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Content:</label>
                    <textarea 
                        className="form-textarea"
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Category:</label>
                    <input 
                        className="form-input"
                        type="text" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        required 
                    />
                </div>
                <button className="form-button" type="submit">Publish</button>
            </form>

            {/* Boutons pour mettre à jour et supprimer le post */}
            <button onClick={() => handleUpdate(post_id, title, content, category)}>Update</button>
            <button onClick={() => handleDelete(post_id)}>Delete</button>
        </div>
    );
};

export default Write;