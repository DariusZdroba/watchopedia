import React from "react";

const MovieList = ({ movieList }) => {
  return (
    <div className="text-white">
      {movieList &&
        movieList.map((movie, index) => <div key={index}>{movie}</div>)}
    </div>
  );
};

export default MovieList;
