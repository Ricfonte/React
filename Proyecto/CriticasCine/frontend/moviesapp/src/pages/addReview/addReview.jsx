import React from 'react';
import './addReview.css';


export const AddReview=(props) => {

    return (
        <div className="add-review-page">
        <header>
          <h1>Moldy Tomatoes</h1>
          <button className="logout-btn">Logout</button>
        </header>
  
        <div className="add-review-form">
          <form>
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