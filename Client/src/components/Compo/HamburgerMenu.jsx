import React from "react";
import "../Styles/HamburgerMenu.css";

export default function HamburgerMenu() {
  return (
    <>
    <div id="container">
      <input id="nav-input" className="navinput" type="checkbox"/>
      <label className="hamburger" for="nav-input"><span></span></label>
      </div>
    </>
  );
}
