import React from "react";
import "./Details.css";

const Details = () => {
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
    </div>
  );
};

export default Details;
