import React from "react";
import { Link } from "react-router-dom";

const Rent = () => {
  return (
    <div>
      <h2 className="rental-success">
        Navigation to the rental page is successful
      </h2>
      <div className="back-container">
        <Link to="/" className="btn-back">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Rent;
