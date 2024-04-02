import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './Communication_styles.css';

function CommunicationPlatform() {
	return (
		<div className="main-page-container">
			<h1>Create A New Chat</h1>
			<div className= "back-button">
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
				<Link to="/Old-Chats">
				<button type="submit" className="primary-button">
					Send
				</button>
				</Link>
			</div>
		</div>
	)
}

export default CommunicationPlatform
