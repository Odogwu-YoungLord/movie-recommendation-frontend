import React, { useEffect, useState } from 'react';
import { getFavorites, removeFavorite } from '../services/api';
import MovieCard from '../components/MovieCard'; // If you already have this
import { useAuth } from '../context/AuthContext'; // Or however you're handling auth

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuth(); // Get user ID from auth context or localStorage

  useEffect(() => {
    if (user?._id) {
      getFavorites(user._id)
        .then((data) => setFavorites(data))
        .catch((err) => console.error('Error fetching favorites:', err));
    }
  }, [user]);

  const handleRemove = (movieId) => {
    removeFavorite(user._id, movieId)
      .then((updated) => setFavorites(updated))
      .catch((err) => console.error('Error removing favorite:', err));
  };

  return (
    <div className="favorites-page">
      <h2>My Favorite Movies</h2>
      <div className="movie-grid">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div key={movie.id} className="movie-item">
              <MovieCard movie={movie} />
              <button onClick={() => handleRemove(movie.id)} className="remove-btn">
                ❌ Remove
              </button>
            </div>
          ))
        ) : (
          <p>You have no favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
