import { useState } from "react";
import { MovieList } from "./MovieList";
export function Movie({ movie }) {
    const [show, setShow] = useState(true);

    const style = {
        color : movie.rating >= 8 ? "green" : "red",
        border: movie.rating >= 8 ? "2px solid green" : "2px solid red",
    };
    const Toggle ={
        border: "2px solid black",
        backgroundColor: show ? "lightgray" : "white",
    }
  return (
    <div className="movie-container" style={style}>
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>

        {/*   Task 1.2 */}
        <button onClick={()=> setShow(!show)} style={Toggle}>Toggle Summary</button>


        { show && <p className="movie-summary">{movie.summary}</p>}

        {/* Task 1.1 - Like & DisLike - MovieCounter */}

        {/* <MovieCounter /> */}
      </div>
    </div>
  );
}