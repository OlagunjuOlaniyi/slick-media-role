import React from "react";
import "./SearchMovie.css";

const SearchMovie = () => {
  return (
    <div className="search section__padding">
      <form action="">
        <label htmlFor="search" className="search__label">
          Search
        </label>
        <div className="search__input">
          <input type="text" id="search" />
        </div>
      </form>

      {/* movie category */}

      <div className="movie__container">
        <div className="movie__cat">
          <h2>Category Name</h2>
        </div>

        <div className="movie__lists">
          {[1, 2, 3, 4, 5, 6].map((index) => {
            return (
              <div className="movie">
                <h4 className="movie__name">Movie Name</h4>
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
          {[1, 2, 3, 4, 5, 6].map((index) => {
            return (
              <div className="movie">
                <h4 className="movie__name">Movie Name</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
