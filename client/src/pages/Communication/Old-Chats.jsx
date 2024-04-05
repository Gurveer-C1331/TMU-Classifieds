import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Communication_styles.css'; // Import styles

function NewChatsPage() {
    // Assume new chats are fetched from a backend or stored in state
    const [messages, setMessages] = useState([]);

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
            <h1 className='message-title-text'>All Chats</h1>
            <Link to="/comms">
                <button className="primary-button">Create A New Chat</button>
            </Link>
            <div className="messages">
                {messages && messages.map((message) => (
                    <div key={message._id}>
                        {message.content.message_text[0]}
                        <br />
                        <span className='message-user-text'>
                            {message.user}
                        </span>
                        <span className='message-date-text'>
                            {new Date(message.content.date_sent[0]).toDateString() + '  ' + new Date(message.content.date_sent[0]).toLocaleTimeString()}
                        </span>
                    </div>
                ))}
            </div>
            <br></br>
        </div>
    );
}

export default NewChatsPage;
