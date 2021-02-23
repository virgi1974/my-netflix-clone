import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const baseImagesUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [] -> run once when the Row oads and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.table(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  return (
    <div className="row">
      <h2> {title} </h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            id={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseImagesUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
