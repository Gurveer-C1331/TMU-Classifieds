import React from 'react'
import './Communication_styles.css';

function CommunicationPlatform() {
	return (
		<div className="main-page-container">
			<h1>Communication Platform</h1>
			<div className="messages">
				{/* Messages will be displayed here */}
			</div>
			<div className="message-form-container">
				<label htmlFor="message">Message:</label>
				<textarea
					id="message"
					name="message"
					rows="4"
					required
				></textarea>
				<button type="submit" className="primary-button">
					Send
				</button>
			</div>
		</div>
	)
}

export default CommunicationPlatform
