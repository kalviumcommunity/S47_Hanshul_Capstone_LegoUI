import React from "react";
import "./HamburgerMenu.css";

export default function HamburgerMenu() {
  return (
    <>
      <div id="container">
        <input id="nav-input" type="checkbox" />
        <label class="hamburger" for="nav-input">
          <span></span>
        </label>
      </div>
    </>
  );
}
