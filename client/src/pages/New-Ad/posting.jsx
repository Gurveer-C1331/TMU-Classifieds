import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function AdPostingInterface() {
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

  const sendMessage = async () => {
    try {
      const category = document.getElementById("category").value;
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const price = document.getElementById("price").value;
      const location = document.getElementById("location").value;
      console.log(category);
      const response = await fetch(`http://localhost:3001/api/adPost/post`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category,
          title,
          description,
          price,
          location,
          user: user.username
        })
      })
      .then((response) => {
        if (response.ok) {
          alert('Ad was posted successfully.');
          navigate(0);
        }
        else {
          alert('Ad did not post successfully.');
        }
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <div className="main-page-container">
      <h1>Post New Ad</h1>
      <div className="ad-posting-container">
        <div className="image-upload-container">
          <div className="image-upload">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Drag & drop an image here</p>
            <p>or</p>
            <input type="file" id="image" name="image" accept="image/*" />
          </div>
        </div>
        <div className="form-container">
          <form id="adForm">
            <label htmlFor="category" className="subtitle-text">Category:</label>
            <select id="category" name="category">
              <option value="items_wanted">Items Wanted</option>
              <option value="items_for_sale">Items for Sale</option>
              <option value="academic_services">Academic Services</option>
            </select>
            <label htmlFor="title" className="subtitle-text">Product Title:</label>
            <input type="text" id="title" name="title" required />
            <label htmlFor="description" className="subtitle-text">Description:</label>
            <textarea id="description" name="description" rows="4" required></textarea>
            <label htmlFor="price" className="subtitle-text">Price:</label>
            <input type="text" id="price" name="price" />
            <label htmlFor="location" className="subtitle-text">Location:</label>
            <input type="text" id="location" name="location" />
          </form>
            <button className="primary-button" onClick={sendMessage}>Post Ad</button>
        </div>
      </div>
    </div>
  );
}

export default AdPostingInterface;
