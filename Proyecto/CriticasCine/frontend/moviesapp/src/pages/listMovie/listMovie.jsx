import  { useEffect, useState } from 'react';
import './listMovie.css';
import  {link} from 'react-router-dom';
import axios from "axios"
 
export const ListMovie =(props) => {
  const [listMovie, setListMovies] = useState([])

    useEffect(() =>{
      callListAppi();
 
    }, [])
    const callListAppi = async () => {
      var result = await axios.get("http://localhost:8080/movies")
      setListMovies(result.data)
    }
    const onClickRoad = ()=>{
      window.location.href ="/movies/:id"
    }
    const onClickWrite = ()=>{
      window.location.href ="/movies/:id/review"
    }
    const onClickNewMovie = ()=>{
      window.location.href ="/movies/new"
    }
    
   
    
    return (
        <div className="movie-list-page">
      <header>
        <h1>Moldy Tomatoes</h1>
        <button className="logout-btn">Logout</button>
      </header>

      <div className="movie-list-container">
        <div className="title-container">
          <h2>Movie List</h2>
          <button onClick={onClickNewMovie} className="add-movie-btn">Add a New Movie</button>
        </div>

        <div className="movie-table">
          <table>
            <thead>
              <tr>
                <th>Movie Title</th>
                <th>Av g. Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { 
               listMovie.map((mov, index) =>{
                return <tr>
                            <td>{mov.movieTitle}</td>
                            <td>{mov.rating}</td>
                            <td>
                            
                              <button onClick={onClickRoad}  style={{backgroundColor: "lightgreen", color: "black"}}> Road Reviews</button>
                        
                              <button onClick= {onClickWrite} style= {{backgroundColor: "green", color: "white"}}> Write a Review</button>
                            </td>
                         </tr>
               })
               } 
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
        
    )
}