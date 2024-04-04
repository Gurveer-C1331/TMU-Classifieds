import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Communication_styles.css'; // Import styles

function NewChatsPage() {
    // Assume new chats are fetched from a backend or stored in state
    const [messages, setMessages] = useState(null);
    const newChats = []

    useEffect(() => {
        const sendMessage = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/messages/post/get`, {
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
            <div className="messages">Is the laptop still available?
                {/* Messages will be displayed here */}
            </div>
            <ul>
                {/* Replace map with a for loop */}
                {messages && messages.message_text && messages.message_text.length > 0 &&
                    (() => {
                        const chatItems = [];
                        for (let i = 0; i < messages.message_text.length; i++) {
                            chatItems.push(<li key={i}>{messages.message_text[i]}</li>);
                        }
                        return chatItems;
                    })()
                }
            </ul>
            <Link to="/comms">
                <button className="primary-button">Create A New Chat</button>
            </Link>
        </div>
    );
}

export default NewChatsPage;
