/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer1">
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
              <h3>LOCATION</h3>
              <p>
                CS 1: Phố Viên, Bắc Từ Liêm, TP.Hà Nội
                <br />
                SDT:080686868
              </p>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
              <h3>ALONE</h3>
              <ul>
                <li>
                  <a
                    href="https:www.facebook.com"
                    target={"_blank"}
                    className="fa fa-facebook"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/"
                    target={"_blank"}
                    className="fa fa-google-plus"
                  ></a>
                </li>
                <li>
                  <a href="/" className="fa fa-twitter"></a>
                </li>
                <li>
                  <a href="/" className="fa fa-linkedin"></a>
                </li>
                <li>
                  <a href="/" className="fa fa-dribbble"></a>
                </li>
              </ul>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelane is a free to use, open source Bootstrap theme created
                by
                <a herf="">Start Bootstrap.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="container text-center">
          <p>@ Website_NDH_01.2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
