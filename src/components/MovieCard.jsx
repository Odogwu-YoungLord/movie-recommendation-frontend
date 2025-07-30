import React from "react";

const MovieCard = ({ movie, onRemove }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <div>
        <h3>{movie.title}</h3>
        <button onClick={() => onRemove(movie._id)}>Remove from Favorites</button>
      </div>
    </div>
  );
};

export default MovieCard;
