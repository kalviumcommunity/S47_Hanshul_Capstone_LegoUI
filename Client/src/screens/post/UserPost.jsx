import React, { useContext } from 'react';
import Card from '../../components/Compo/MainPageCard';
import styles from '../Styles/UserPost.module.css';
import { UserContext } from '../../Services/UserContext';

const UserPostContainer = () => {
    const { userCodes } = useContext(UserContext);
  return (
    <div className={styles.cardsContainer}>
      <div>
        <h1>User Posts</h1>
      </div>
      <div className={styles.container}>
        {userCodes.map((userCode) => (
          <Card key={userCode._id} userCode={userCode} />
        ))}
      </div>
    </div>
  );
};

export default UserPostContainer;
