import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/MainPageCard.module.css";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


const Card = ({ isSidebarOpen, adminCode, userCode, Id, Displaybtns }) => {
  const navigate = useNavigate();

  const code = adminCode || userCode;

  const handleSourceCodeClick = () => {
    navigate('/codepage', { state: code }); 
  };

  return (
    <div className={`${styles.card} ${isSidebarOpen ? styles.sidebarOpen : ""}`}>
      <img className={styles.cardimg} src={code.imagePath} alt={code.title} />
      <div className={styles.cardbody}>
        <h2>{code.title}</h2>
        <button className={styles.sourcecode} onClick={handleSourceCodeClick}>Source Code</button>
        <div className={`${styles.editbt} ${styles.Displaybtns}`}>
          <button className={styles.editbtn}><MdEdit className={styles.icons} /></button>
          <button className={styles.editbtn}><MdDelete className={styles.icons} /></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
