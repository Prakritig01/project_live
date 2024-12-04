import React from "react";
import './Loader.css';

const Loader = ({show}) => {
    if (!show) return null; 
  return (
    <div className="loader">
      <div className="spinner">{console.log("loader section")}</div>
      <p>Refreshing...</p>
    </div>
  );
};

export default Loader;
