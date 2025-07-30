import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Recommendations from "./Recommendations";
<Recommendations />

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tmdb/movie/${id}`);
        setMovie(res.data);
      } catch (err) {
        console.error("🔴 Failed to fetch movie details", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.title}</h2>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.title}
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      <button onClick={() => handleAddFavorite(movie)}>❤️ Add to Favorites</button>
      

      {movie.genres && (
        <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
      )}
    </div>
  );
  
};

export default MovieDetails;