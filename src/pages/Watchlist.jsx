import { useEffect, useState } from 'react';
import { getWatchlist, removeFromWatchlist } from '../services/api';

const Watchlist = () => {
  const userId = localStorage.getItem('userId');
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const data = await getWatchlist(userId);
      setWatchlist(data);
    };
    fetchWatchlist();
  }, [userId]);

  const handleRemove = async (movieId) => {
    const updated = await removeFromWatchlist(userId, movieId);
    setWatchlist(updated);
  };

  return (
    <div className="container">
      <h2>Your Watchlist</h2>
      <div className="movie-grid">
        {watchlist.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
            <button onClick={() => handleRemove(movie.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
