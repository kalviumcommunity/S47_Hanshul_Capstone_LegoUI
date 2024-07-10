import React from "react";
import styles from "../Styles/MainPageCard.module.css";

const Card = ({ image, title, isSidebarOpen }) => {
  return (

    <div className={`${styles.card} ${isSidebarOpen ? styles.sidebarOpen : ""}`}>
      <img className={styles.cardimg} src={image} alt="" />
      <div className={styles.cardbody}>
        <h2>{title}</h2>
        <button>Sorce Code</button>
      </div>
    </div>
  );
};

export default Card;
