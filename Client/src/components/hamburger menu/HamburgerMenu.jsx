import React from "react";
import "./HamburgerMenu.css";

export default function HamburgerMenu() {
  return (
    <>
      <div id="container">
        <input id="nav-input" type="checkbox" />
        <label className="hamburger" htmlFor="nav-input">
          <span></span>
        </label>
      </div>
    </>
  );
}
