import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Communication_styles.css';

function CommunicationPlatform() {
  
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/user/currentUser', {
          method: 'GET'
        });
        const data = await response.json();
        setUsername(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCurrentUser();
  }, []); 

  // Define sendMessage function outside of useEffect
  const sendMessage = async () => {
    try {
      const message = document.getElementById("message").value;
      const response = await fetch(`http://localhost:3001/api/message/post/${username}-${message}`, {
        method: 'GET'
      });
      const data = await response.json();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="main-page-container">
      <h1>Create A New Chat</h1>
      <div className="back-button">
        <Link to="/Old-Chats">
          <button type="submit" className="secondary-button">
            Old Chats
          </button>
        </Link>
      </div>
      <div className="message-form-container">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
        ></textarea>
        {/* Use onClick event handler to call sendMessage function */}
        <button type="button" className="primary-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  )
}

export default CommunicationPlatform;
