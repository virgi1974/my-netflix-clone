import React, { useEffect, useState } from "react";
import axios from "./axios";

const baseImagesUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
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

      <div className="rows__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            src={`${baseImagesUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
