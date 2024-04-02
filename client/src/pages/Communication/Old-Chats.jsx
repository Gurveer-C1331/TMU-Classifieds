import React from 'react';
import { Link } from 'react-router-dom';
import './Communication_styles.css'; // Import styles

function NewChatsPage() {
    // Assume new chats are fetched from a backend or stored in state
    const newChats = []; // Array of new chats

    return (
        <div className="main-page-container">
            <h1>All Chats</h1>
            <div className="messages">
                {/* Messages will be displayed here */}
            </div>
            <ul>
                {newChats.map((chat, index) => (
                    <li key={index}>{chat}</li>
                ))}
            </ul>
            <Link to="/comms">
                <button className="primary-button">Create A New Chat</button>
            </Link>
        </div>
    );
}

export default NewChatsPage;
