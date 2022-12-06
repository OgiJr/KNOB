import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="copyright-area copyright-style-one">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="copyright-left">
              <p className="copyright-text">{new Date().getFullYear()}© Камара на независимите оценители в България. Всички права запазени.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <div className="copyright-right text-center text-md-end">
              <p className="copyright-text" style={{ fontSize: "16px", marginTop: 20 }}>
                Created by{" "}
                <a target={"_blank"} href="https://javery.bg/" style={{ color: "orange" }}>
                  {" "}
                  Javery
                </a>
                .{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
