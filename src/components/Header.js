import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4 " href="/">
            ALONE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/product">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <div className="button">
              <a href="/login" className="btn btn-outline-dark">
                <i class="fa fa-sign-in me-2">Login</i>
              </a>
            </div>
            <div className="button">
              <a href="/register" className="btn btn-outline-dark">
                <i class="fa fa-address-card-o me-2">Register</i>
              </a>
            </div>
            <div className="button">
              <a href="/cart" className="btn btn-outline-dark">
                <i class="fa fa-cart-plus me-2">Cart</i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
