import React, { useEffect, useState } from "react";
import "./SearchMovie.css";
// import axios from "../api/axios";
import axios, { Axios } from "axios";

const SearchMovie = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=inception"&apikey=9ecd1edd`)
      .then((response) => {
        const results = response.data;
        const result = results.Search;

        setMovies(result);
      });
  }, []);

  console.log("movie", movies);

  const handleChange = (e) => {
    e.preventDefault();
    const toLowerCase = e.target.value.toLowerCase();
    setSearch(toLowerCase);
  };

  const movieLists = movies.filter((movie) => {
    if (search === "") {
      return movie;
    } else {
      return movie.Title.toLowerCase().match(search);
    }
  });

  return (
    <div className="search section__padding">
      <form>
        <label htmlFor="search" className="search__label">
          Search
        </label>
        <div className="search__input">
          <input
            type="text"
            id="search"
            value={search}
            onChange={handleChange}
          />
        </div>
      </form>

      {/* movie category */}

      <div className="movie__container">
        <div className="movie__cat">
          <h2>Category Name</h2>
        </div>

        <div className="movie__lists">
          {movieLists.map((mov, index) => {
            return (
              <div className="movie" key={index}>
                <h4 className="movie__name">{mov.Title}</h4>
              </div>
            );
          })}
        </div>
      </div>

      <div className="movie__container">
        <div className="movie__cat">
          <h2>Category Name</h2>
        </div>

        <div className="movie__lists">
          {movies.map((mov, index) => {
            return (
              <div className="movie" key={index}>
                <h4 className="movie__name">{mov.Title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
