import React from "react";
import spinnerImg from "../images/spinner.svg";
import "../styles/LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="LoadingSpinner">
      <img
        className="LoadingSpinner__spinner"
        src={spinnerImg}
        alt="Loading..."
      />
    </div>
  );
}

export default LoadingSpinner;
