import React from "react";
import image from "../images/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="error-404">
        <img src={image} alt="404" />
        <h1>404 - Not Found</h1>
        <Link className="btn" to="/">
          <button>Back Home</button>
        </Link>
        <div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NotFound;
