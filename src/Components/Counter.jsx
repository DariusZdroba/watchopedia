import React from "react";
import { useState } from "react";
const Counter = () => {
  const [counterState, setCounterState] = useState(() => {
    return { counter: 0, title: "Fun" };
  });
  const [titleState, setTitleState] = useState("Fun");
  const handleAddClick = (e) => {
    e.preventDefault();
    setCounterState((prevState) => {
      return { ...prevState, counter: prevState.counter + 1 };
    });
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    setCounterState((prevState) => {
      return { ...prevState, counter: prevState.counter - 1 };
    });
  };

  return (
    <div className="col-12 col-md-4 offset-md-4 border text-white">
      <span className="h2 pt-4 m-2 text-white-50">{titleState} Counter</span>
      <button
        className="btn btn-success m-1"
        onClick={(e) => handleAddClick(e)}
      >
        +1
      </button>
      <button
        className="btn btn-danger m-1"
        onClick={(e) => handleRemoveClick(e)}
      >
        -1
      </button>
      <br />
      <span className="h4">
        Counter: &nbsp;
        <span
          className={`${
            counterState.counter >= 0 ? "text-success" : "text-danger"
          } `}
        >
          {counterState.counter}
        </span>
      </span>
    </div>
  );
};

export default Counter;
