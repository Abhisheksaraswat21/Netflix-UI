import axios from "./axios";
import React, { useState, useEffect } from "react";
import requests from "./Requests";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  // fetchUrl = toString(fetchUrl);

  // const {title,fetchUrl, isLargeRow = false} = props;

  fetchUrl = requests.fetchNetflixOriginals;

  const [movies, setMovies] = useState([]);

  //https://image.tmdb.org/t/p/original/  this is generally a way of accessing the data from tmdb anf backdrop_path
  //we get fromt the movie console.log

  console.log("thhis is inside " + fetchUrl);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      const request = await axios.get(fetchUrl);

      if (isMounted) setMovies(request.data.results);

      //it is good practice to return from useffect
      return request;
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
          // (  (isLargeRow && movie.poster_path) ||
          //   (!isLargeRow && movie.backdrop_path ))&& (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )}
        
      </div>
    </div>
  );
}

export default Row;
