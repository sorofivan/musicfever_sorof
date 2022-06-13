import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/images/error.png";
import "./Error.css";

const Error404 = () => {
  return (
    <div className="error-container">
      <img src={error} className="my-2" alt="Error 404" />
      <h3 className="text-uppercase mt-2">File not found!</h3>
      <h5 className="mt-3">Sorry, we can't find what you're looking for.</h5>
      <Link
        to="/"
        type="button"
        className="btn btn-warning text-uppercase mt-1 mb-5"
      >
        Back to shop
      </Link>
    </div>
  );
};

export default Error404;
