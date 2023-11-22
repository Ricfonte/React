import React from 'react';
import './viewMovie.css';


export const ViewMovie =(props) => {
    return (
        <div className="view-movie-page">
        <header>
          <h1>Moldy Tomatoes</h1>
          <button className="logout-btn">Logout</button>
        </header>
  
        <div className="reviews-container">
          <h2>Reviews of the Movie</h2>
          <table>
            <thead>
              <tr>
                <th>Reviewer</th>
                <th>Rating</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {/* ojo no olvidar mapear los comentarios */}
              <tr>
                <td>Ricardo Fontecilla</td>
                <td>4</td>
                <td>hermosa pelicual!</td>
              </tr>
              <tr>
                <td>Ricardo Fontecilla</td>
                <td>4</td>
                <td>hermosa pelicual!</td>
              </tr>
              <tr>
                <td>Ricardo Fontecilla</td>
                <td>4</td>
                <td>hermosa pelicual!</td>
              </tr>
            </tbody>
          </table>
          <div className="delete-movies-container">
          <button className="delete-btn">Delete Movie</button>
        </div>
        </div>
        </div>
    )
}