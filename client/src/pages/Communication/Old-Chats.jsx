import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Communication_styles.css'; // Import styles

function NewChatsPage() {
    // Assume new chats are fetched from a backend or stored in state
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        const sendMessage = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/message/get`, {
                    method: 'GET'
                });
                const data = await response.json();
                setMessages(data);
            } catch (error) {
                console.error("Error fetching classified listings data:", error);
            }
        };
        sendMessage();
    }, []);

    return (
        <div className="main-page-container">
            <h1>All Chats</h1>
            <div className="messages">
                {messages && messages.map((message, index) => (
                    <div key={index}>
                        {message.message_text && message.message_text.length > 0 && message.message_text[0]}
                    </div>
                ))}
            </div>
            <Link to="/comms">
                <button className="primary-button">Create A New Chat</button>
            </Link>
        </div>
    );
}

export default NewChatsPage;
