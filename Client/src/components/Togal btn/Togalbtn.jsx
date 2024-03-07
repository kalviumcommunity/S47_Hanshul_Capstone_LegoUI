import React from "react";
import "./Togalbtn.css";

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
        <button onClick={toggleTheme} className="light_dark"></button>
    </>
  );
}
