import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
export default function Cart() {
  return (
    <div className="px-4 my-5 bg-light rounded-3 py-5">
      <div className="container py-4">
        <div className="row">
          <h3>Chưa Có Đơn Hàng !</h3>
          <div className=" button-cart">
            <Link to="/product" className="btn btn-outline-primary px-3">
              Mua Hàng !
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
