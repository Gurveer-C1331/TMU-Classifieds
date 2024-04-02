import React from 'react';
import './styles.css';

function AdPostingInterface() {
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
            <button type="submit" className="primary-button">Post Ad</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdPostingInterface;
