import React, { useEffect, useState } from "react";
import axios from "axios";
import { addToWatchlist } from '../services/api';

const Recommendations = () => {
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem('userId'); // ✅ fetch here

  const handleAddToWatchlist = async (movie) => {
    try {
      await addToWatchlist(userId, movie);
      alert('✅ Added to watchlist!');
    } catch (err) {
      console.error("❌ Failed to add to watchlist:", err.message);
    }
  };

  useEffect(() => {
    if (!userId) return;

    const fetchRecommendations = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tmdb/recommendations/${userId}`);
        setRecommended(res.data || []);
      } catch (err) {
        console.error("🔴 Failed to load recommendations:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [userId]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎯 Personalized Recommendations</h2>
      {loading ? (
        <p>Loading...</p>
      ) : recommended.length > 0 ? (
        recommended.map((movie) => (
          <div key={movie.id} style={{ marginBottom: "20px" }}>
            <h4>{movie.title}</h4>
            <p>{movie.overview}</p>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : 'https://via.placeholder.com/200x300?text=No+Image'
              }
              alt={movie.title}
              style={{ width: "100px" }}
            />
            <br />
            <button onClick={() => handleAddToWatchlist(movie)}>➕ Add to Watchlist</button>
          </div>
        ))
      ) : (
        <p>No recommendations yet. Like some movies first!</p>
      )}
    </div>
  );
};

export default Recommendations;
