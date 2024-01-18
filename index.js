ocument.addEventListener('DOMContentLoaded', () => {
  // Function to fetch movie details by ID
  const getMovieDetails = async (movieId) => {
    try {
      const response = await fetch(`/films/${movieId}`);
      const data = await response.json();
      // Update the DOM with movie details
      displayMovieDetails(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  // Function to display movie details
  const displayMovieDetails = (movie) => {
    const movieDetailsContainer = document.getElementById('movie-details');
    // Update the container with movie details HTML
    // You can use template literals or create DOM elements here
  };

  // Function to fetch all movies
  const getAllMovies = async () => {
    try {
      const response = await fetch('/films');
      const data = await response.json();
      // Update the DOM with movie menu
      displayMovieMenu(data);
    } catch (error) {
      console.error('Error fetching all movies:', error);
    }
  };

  // Function to display movie menu
  const displayMovieMenu = (movies) => {
    const filmsList = document.getElementById('films');
    // Update the list with movie menu HTML
  };

  // Initial load - fetch and display the first movie details and all movies menu
  getMovieDetails(1);
  getAllMovies();
});
