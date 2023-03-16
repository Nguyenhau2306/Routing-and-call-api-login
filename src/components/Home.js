import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
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
            <h5 class="card-title display-6 fw-bolder mb-1">
              Hello, well come to my app!
            </h5>
            <p class="card-text lead fs-2">This is my test</p>
            <Link to="/product" className="btn btn-outline-primary px-3">
              Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
