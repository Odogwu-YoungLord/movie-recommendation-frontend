# React + Vite

<!-- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

# 🎬 Movie Recommendation App

A fullstack web application that allows users to discover, search, and get personalized movie recommendations. Built with **React**, **Express**, and **MongoDB**, and powered by **TMDB API**.

---

## 🔥 Features

- 🔍 Search movies by **title, genre, or year**
- 🎯 Filter by **rating**, **release date**, and **popularity**
- 📄 View **detailed movie info**
- ❤️ Add to **Favorites** and 📺 **Watchlist**
- 🤖 Get **personalized movie recommendations**
- 👤 Manage **user profile** (update username/password, delete account)
- 🔐 Secure **user authentication**
- ⚙️ Responsive design with custom CSS

---

## 🚀 Tech Stack

**Frontend:**
- React + Vite
- React Router
- Custom CSS

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- TMDB API Integration
- bcrypt for password hashing

---

## 🌍 Live Demo

Frontend: https://superlative-baklava-7c63d0.netlify.app/  
Backend: https://movie-recommendation-backend-tj1n.onrender.com
![movie-recommendation-App Search Page](https://github.com/user-attachments/assets/847cca7b-91d4-4d6c-acf4-d8705cc07158)

![movie-recommendation-App Search Page 2](https://github.com/user-attachments/assets/9c66cf2f-4448-46c6-9185-c73f84e0b416)

![movie-recommendation-App Search Page 3](https://github.com/user-attachments/assets/bd65b99b-7b10-4f88-a629-c100c6c10629)

![movie-recommendation-App Register Page](https://github.com/user-attachments/assets/54185ef7-7e28-4bd8-b460-e64dd4d8216a)

![movie-recommendation-App Login Page](https://github.com/user-attachments/assets/6c57fc3b-44c2-4e5d-8563-0afaa4a28eed)




---

## 📦 Installation Instructions

### 1. Clone Repositorie

```bash
git clone https://github.com/your-username/frontend-repo.git
git clone https://github.com/your-username/backend-repo.git


## 2 Setup Backend

cd backend
npm install

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
TMDB_API_KEY=your_tmdb_api_key

## Start the Server:
node server.js

#3 Setup Frontend:
cd frontend

### Create a .env File in the Frontend root:
VITE_API_BASE=https://your-backend-api.onrender.com

### Start the app:
npm run dev


# Test Users.
you can use the following credentials:
Email: testuser@example.com
Password: 123456

# Folder Structure.
root
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   └── index.html
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   └── server.js


# API Routes
##Auth
- POST /api/users/register
- POST /api/users/login

## Movies
GET /api/movies/search?query=
GET /api/movies/:id
GET /api/movies/recommendations/:id

## Favorites & Watchlist
GET /api/users/:userId/favorites
POST /api/users/:userId/favorites
Delete /api/users/:userId/favorites/:movieId
Same routes for /watchlist

## Profile
GET /api/users/:userId/profile
PUT /api/users/:userId/profile
DELETE /api/users/:userId/profile

##📄 License
This project is open source and available under the MIT License.

# 🙌 Acknowledgements
The Movie Database (TMDB) for the API
Vite + React for fast frontend dev
MongoDB Atlas for cloud DB hosting
Netlify & Render for free deployment
