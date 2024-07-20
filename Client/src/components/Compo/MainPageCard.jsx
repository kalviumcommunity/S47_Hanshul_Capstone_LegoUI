import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/MainPageCard.module.css";

const Card = ({ isSidebarOpen, adminCode, userCode }) => {
  const navigate = useNavigate();

  const code = adminCode || userCode;

  const handleSourceCodeClick = () => {
    navigate('/codepage', { state: code }); // Pass the appropriate code object to the code page
  };

  return (
    <div className={`${styles.card} ${isSidebarOpen ? styles.sidebarOpen : ""}`}>
      <img className={styles.cardimg} src={code.imagePath} alt={code.title} />
      <div className={styles.cardbody}>
        <h2>{code.title}</h2>
        <button onClick={handleSourceCodeClick}>Source Code</button>
      </div>
    </div>
  );
};

export default Card;
