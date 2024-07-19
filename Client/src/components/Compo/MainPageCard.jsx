import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/MainPageCard.module.css";

const Card = ({ isSidebarOpen, adminCode }) => {
  const navigate = useNavigate();

  const handleSourceCodeClick = () => {
    navigate('/codepage', { state: { adminCode } }); // Pass the entire adminCode object to the code page
  };

  return (
    <div className={`${styles.card} ${isSidebarOpen ? styles.sidebarOpen : ""}`}>
      <img className={styles.cardimg} src={adminCode.imagePath} alt={adminCode.title} />
      <div className={styles.cardbody}>
        <h2>{adminCode.title}</h2>
        <button onClick={handleSourceCodeClick}>Source Code</button>
      </div>
    </div>
  );
};

export default Card;
