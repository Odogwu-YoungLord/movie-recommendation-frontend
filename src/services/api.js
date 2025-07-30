import axios from 'axios';

const BASE_URL = "https://movie-recommendation-backend-tj1n.onrender.com" // Replace with your actual backend URL
const API_BASE = "https://movie-recommendation-backend-tj1n.onrender.com/api";


export const addFavorite = async (userId, movie) => {
  const res = await axios.post(`${BASE_URL}/api/user/favorites/${userId}`, movie);
  return res.data;
};


export const getFavorites = async (userId) => {
  const res = await axios.get(`${BASE_URL}/api/user/favorites/${userId}`);
  return res.data;
};

export const removeFavorite = async (userId, movieId) => {
  const res = await axios.delete(`${BASE_URL}/api/user/favorites/${userId}/${movieId}`);
  return res.data;
};

export const addToWatchlist = async (userId, movie) => {
  const res = await fetch(`${API_BASE}/users/${userId}/watchlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie)
  });
  return res.json();
};

export const removeFromWatchlist = async (userId, movieId) => {
  const res = await fetch(`${API_BASE}/users/${userId}/watchlist/${movieId}`, {
    method: 'DELETE'
  });
  return res.json();
};

export const getWatchlist = async (userId) => {
  const res = await fetch(`${API_BASE}/users/${userId}/watchlist`);
  return res.json();
};


export const getUserProfile = async (userId) => {
  const res = await fetch(`${API_BASE}/users/${userId}/profile`);
  return res.json();
};

export const updateUserProfile = async (userId, data) => {
  const res = await fetch(`${API_BASE}/users/${userId}/profile`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const deleteUserProfile = async (userId) => {
  const res = await fetch(`${API_BASE}/users/${userId}/profile`, {
    method: 'DELETE'
  });
  return res.json();
};


// Exporting the API instance for use in other parts of the application