import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">
              Hello, well come to about page!
            </h1>
            <p className="lead mb-4">
              React là gì? React là một thư viện JavaScript declarative, hiệu
              quả và linh hoạt cho việc xây dựng giao diện người dùng. React cho
              phép bạn tạo những giao diện (UI) phức tạp từ những đoạn code nhỏ
              và độc lập. Những đoạn code này được gọi là “components”.
            </p>
            <Link to="/contact" className="btn btn-outline-primary px-3">
              contact
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="./img/about.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
