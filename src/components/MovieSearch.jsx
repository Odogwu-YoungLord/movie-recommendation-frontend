// export default MovieSearch;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [genres, setGenres] = useState([]);
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  // Fetch genres from backend on mount
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tmdb/genres');
        setGenres(res.data);
      } catch (err) {
        console.error('Failed to load genres:', err.message);
      }
    };
    fetchGenres();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await axios.get('http://localhost:5000/api/tmdb/search', {
        params: {
          q: query,
          year,
          genre,
          sort_by: sortBy,
        },
      });
      setMovies(response.data);
      setError('');
    } catch (err) {
      console.error("Search error:", err.message);
      setError('Failed to fetch movies');
    }
  };

  return (
    <div className="movie-search-container" style={{ padding: '20px' }}>
      <h2>🎬 Movie Search</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter movie title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ marginRight: '10px' }}
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)} style={{ marginRight: '10px' }}>
          <option value="">Genre</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ width: '80px', marginRight: '10px' }}
        />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ marginRight: '10px' }}>
          <option value="popularity.desc">Popularity</option>
          <option value="release_date.desc">Newest</option>
          <option value="vote_average.desc">Top Rated</option>
        </select>

        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="movie-results">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card" style={{ marginBottom: '20px' }}>
              <Link to={`/movie/${movie.id}`}>
  <h3>{movie.title}</h3>
</Link>

              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p><strong>Release:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> {movie.vote_average}</p>
              <p>{movie.overview?.slice(0, 150)}...</p>
            </div>
          ))
        ) : (
          <p>No movies to display.</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
