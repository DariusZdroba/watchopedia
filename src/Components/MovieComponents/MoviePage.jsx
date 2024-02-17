import React, { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const MoviePage = () => {
  const [movieList, setMovieList] = useState(["Die Hard", "Harry Potter"]);
  const updateMovieList = (newMovieList) => {
    setMovieList((prevState) => [...prevState, newMovieList]);
  };
  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie updateMovieList={updateMovieList} />
      <MovieList movieList={movieList} />
    </div>
  );
};

export default MoviePage;
