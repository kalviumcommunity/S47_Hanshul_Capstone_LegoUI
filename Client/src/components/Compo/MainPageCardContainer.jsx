import React from 'react';
import Card from '../Compo/MainPageCard';
import styles from '../Styles/MainPageCardContainer.module.css';

const CardContainer = ({ cards, isSidebarOpen }) => {
  return (
    <div className={styles.cardsContainer}>
        <div className={`${styles.container} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        {cards.map((card, index) => (
            <Card key={index} image={card.image} title={card.title} isSidebarOpen={isSidebarOpen} />
        ))}
        </div>
    </div>
  );
};

export default CardContainer;
