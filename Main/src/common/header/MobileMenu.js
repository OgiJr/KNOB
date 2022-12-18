import React from "react";
import Nav from "./Nav";
import { FiX } from "react-icons/fi";

const MobileMenu = ({ show, onClose }) => {
  var elements = document.querySelectorAll(".popup-mobile-menu .has-droupdown > a");
  var elementsTwo = document.querySelectorAll(".popup-mobile-menu .with-megamenu > a");
  for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        this.parentElement.querySelector(".submenu").classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

  for (var j in elementsTwo) {
    if (elementsTwo.hasOwnProperty(j)) {
      elementsTwo[j].onclick = function () {
        this.parentElement.querySelector(".rn-megamenu").classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <div className={`popup-mobile-menu ${show ? "active" : ""}`}>
      <div className="inner">
        <div className="header-top">
          <div style={{ fontWeight: "bold", color: "orange", fontSize: 24 }}>
            <a href="/" style={{ color: "orange" }}>
              КНОБ
            </a>
          </div>
          <div className="close-menu">
            <span className="close-button" onClick={onClose}>
              <FiX />
            </span>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};
export default MobileMenu;
