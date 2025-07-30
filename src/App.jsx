import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import MovieSearch from "./components/MovieSearch";
import MovieDetails from "./components/MovieDetails";
import Recommendations from "./components/Recommendations";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import "./styles/custom.css";




function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ This will persist across all routes */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<MovieSearch />} />
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watchlist" element={<div>Watchlist Page</div>} /> {/* Placeholder for Watchlist */}
        <Route path="/profile" element={<div>Profile Page</div>} /> {/* Placeholder for Profile */}
      </Routes>
    </Router>
  );
}

export default App;
