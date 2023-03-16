import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="./img/bgr.jpg"
          class="card-img"
          alt="Backgroud"
          height="550px"
        />
        <div class="card-img-overlay">
          <div className="container">
            <h5 class="card-title display-6 fw-bolder mb-1">About</h5>
            <p>Welcome to the About page!</p>
            <Link to="/contact" className="btn btn-outline-primary px-3">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
