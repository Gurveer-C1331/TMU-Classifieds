import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Communication_styles.css';

function CommunicationPlatform() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/user/currentUser/${localStorage.getItem('username')}`, {
          method: 'GET'
        })
        .then((response) => response.json())
        .then((data) => setUser(data));
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
      const response = await fetch(`http://localhost:3001/api/message/post`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message,
          user: user.username
        })
      })
      .then((response) => {
        if (response.ok) {
          alert('Message was posted successfully.');
          navigate('/Old-Chats');
        }
        else {
          alert('Message did not post successfully.');
        }
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="main-page-container">
      <h1 className='message-title-text'>Create A New Chat</h1>
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
          <button className="primary-button" onClick={sendMessage}>
            Send
          </button>
      </div>
    </div>
  )
}

export default CommunicationPlatform;