import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  const baseImagesUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      const randomMovie = request.data.results[randomIndex];
      setMovie(randomMovie);
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, max) {
    return str.length > max ? str.substr(0, max - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseImagesUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {/* {movie?.overview ? truncate(movie?.overview, 150) : "upsssssssssssss"} */}
          {truncate(movie?.overview || "upssss", 150)}
        </h1>
      </div>
    </header>
  );
}

export default Banner;
