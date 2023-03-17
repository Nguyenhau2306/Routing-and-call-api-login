import React from "react";
import { Link } from "react-router-dom";
export default function Product() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="./img/bgr.jpg"
          className="card-img"
          alt="Backgroud"
          height="550px"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-6 fw-bolder mb-1">Product</h5>
            <p>Welcome to the Product page!</p>
            <Link to="/about" className="btn btn-outline-primary px-3">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
