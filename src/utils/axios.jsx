// Importing the axios library
import axios from "axios";

// Creating an axios instance with customized configuration
const instance = axios.create({
  // Base URL for the Movie Database API
  baseURL: "https://api.themoviedb.org/3",

  // Setting headers for the API requests
  headers: {
    // Accepting JSON response
    accept: "application/json",
    // Adding Authorization token for authentication
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTBmMjYxZWZjNzZiMjhhMzBiNmM0NzUzYmIzMzg2MiIsInN1YiI6IjY1Yzc4NDk5NTRhMDk4MDE4NDAxYzY0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fAw6gsd3mSKnlnao3NETABvnV20tfrfPBDC6KDWeqsg",
  },
});

// Exporting the configured axios instance
export default instance;
