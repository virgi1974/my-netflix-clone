import axios from "axios";

// base url to fetch data from TMDB
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

export default instance;