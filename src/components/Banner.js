import React, { useState, useEffect } from "react";
import requests from "../utils/request";
import Axios from "axios";
import "../assets/css/Banner.css";
const baseUrl = "https://api.themoviedb.org/3";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(`${baseUrl}${requests.fetchTrending}`);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name}</h1>
        {console.log(movie)}
        <div className="banner__buttons">
          <a className="banner__button">Play</a>
          <a className="banner__button">My List</a>
        </div>
        <p className="banner__desc">{movie?.overview}</p>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;
