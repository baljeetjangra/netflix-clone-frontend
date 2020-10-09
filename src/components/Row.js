import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/Row.css";

const baseUrl = "https://api.themoviedb.org/3";
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargePoster }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}${fetchUrl}`);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row__poster ${
                isLargePoster ? "" : "row__smallPoster"
              }`}
              key={movie.id}
              src={`${imageBaseUrl}${
                isLargePoster ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
