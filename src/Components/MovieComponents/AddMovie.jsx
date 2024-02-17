import React, { useState } from "react";

const AddMovie = ({ updateMovieList }) => {
  const [addMovie, setAddMovie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovieList(addMovie);
    setAddMovie("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row text-white">
        <div className="col-12 text-center py-1 h4 text-success">
          {" "}
          Add Movie{" "}
        </div>
        <div className="col-8 offset-1">
          <input
            className="form-control"
            type="text"
            placeholder="Movie Name"
            value={addMovie}
            onChange={(e) => setAddMovie(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success form-control">Add</button>
        </div>
        <hr className="mt-3" />
      </div>
    </form>
  );
};

export default AddMovie;
