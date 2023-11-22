import React from 'react';
import './addMovie.css';

export const AddMovie =(props) => {
    return (
      <div className="add-movie-page">
      <header>
        <h1>Moldy Tomatoes</h1>
        <button className="logout-btn">Logout</button>
      </header>

      <div className="add-movie-form">
        
          <h2>Submit a Movies and a Review</h2>
        <form>
          <div className="form-group">
            <label htmlFor="movieTitle">Movie Title:</label>
            <input type="text" id="movieTitle" name="movieTitle" />
          </div>

          <div className="form-group">
            <label htmlFor="yourName">Your Name:</label>
            <input type="text" id="yourName" name="yourName" />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <select id="rating" name="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="yourReview">Your Review:</label>
            <textarea id="yourReview" name="yourReview"></textarea>
          </div>

          <div className="button-container">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
        </div>
    )
}