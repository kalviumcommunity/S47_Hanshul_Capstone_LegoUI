import React from "react";
import "./Togalbtn.css";
import { IoMoon } from "react-icons/io5";
import { BsFillSunFill } from "react-icons/bs";

export default function Togalbtn() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightkMode();
    }
  };

  return (
    <>
      <div className="darkmode">
        <label>
          <input onChange={toggleTheme} type="checkbox"/>
          <BsFillSunFill className="sun" />
          <IoMoon className="moon" />
          <span className="toggle"></span>
          {/* <div className="animateBg"></div> */}
        </label>
      </div>
    </>
  );
}
