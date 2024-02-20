import React, { useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=49d1f792&s=${query}`);
      setResults(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const MovieDetails = async (imdbID) => {
    if (selectedMovie === imdbID) {
      setSelectedMovie(null);
    } else {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=49d1f792&i=${imdbID}`);
        setSelectedMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ results, searchMovies, MovieDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
