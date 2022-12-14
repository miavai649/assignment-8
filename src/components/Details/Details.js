import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Details.css";

const Details = (props) => {
  const { details } = props;

  let totalTime = 0;
  for (const detail of details) {
    totalTime = totalTime + detail.time;
  }
  const [breakBtn, setBreakBtn] = useState(0);
  function handleBreakTime(props) {
    setBreakBtn(props);
  }
  const notify = () => toast("Well done!");
  return (
    <div className="details-section">
      <div className="personal-details">
        <h1>Mahmudul Haque Noor</h1>
        <p>
          Email: <i>mahmudulhaquenoor@gmail.com</i>
        </p>
        <div className="extra-info">
          <div>
            <h2>45kg</h2>
            <p>Weight</p>
          </div>
          <div>
            <h2>5.5</h2>
            <p>Height</p>
          </div>
          <div>
            <h2>22years</h2>
            <p>Age</p>
          </div>
        </div>
      </div>
      <h2>Add a Break</h2>
      <div className="all-break-btn">
        <div>
          <button onClick={() => handleBreakTime(10)} className="break-btn">
            10s
          </button>
        </div>
        <div>
          <button onClick={() => handleBreakTime(20)} className="break-btn">
            20s
          </button>
        </div>
        <div>
          <button onClick={() => handleBreakTime(30)} className="break-btn">
            30s
          </button>
        </div>
        <div>
          <button onClick={() => handleBreakTime(40)} className="break-btn">
            40s
          </button>
        </div>
      </div>
      <h2>Exercise Information</h2>
      <div className="exercise-time-details">
        <h3>Exercise Time:</h3>
        <span>{totalTime} min</span>
      </div>
      <div className="break-time-details">
        <h3>Break Time:</h3>
        <span>{breakBtn}s</span>
      </div>
      <div>
        <button onClick={notify} className="exercise-done-btn">Exercise Done</button>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Details;
