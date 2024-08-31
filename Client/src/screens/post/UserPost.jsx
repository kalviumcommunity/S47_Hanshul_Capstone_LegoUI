import React, { useContext } from 'react';
import Card from '../../components/Compo/MainPageCard';
import styles from '../Styles/UserPost.module.css';
import { UserContext } from '../../Services/UserContext';

const UserPostContainer = () => {
    const { userCodes, Displaybtns, setDisplaybtns, user, AdminEmail } = useContext(UserContext);
    if(user.email === AdminEmail){
        setDisplaybtns(true)
    }
    setDisplaybtns(true)

  return (
    <div className={styles.cardsContainer}>
      <div>
        <h1>User Posts</h1>
      </div>
      <div className={styles.container}>
        {userCodes.map((userCode) => (
          <Card key={userCode._id} Id ={userCode._id} Displaybtns={Displaybtns} userCode={userCode} />
        ))}
      </div>
    </div>
  );
};

export default UserPostContainer;
