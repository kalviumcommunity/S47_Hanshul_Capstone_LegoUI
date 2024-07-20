import React, { useContext } from 'react';
import Card from '../../components/Compo/MainPageCard';
import styles from '../Styles/UserPost.module.css';
import { UserContext } from '../../Services/UserContext';

const UserFilteredPost = () => {
  const { userCodes, user } = useContext(UserContext);

  // Determine the user's email based on the login provider
  let userEmail = "";
  if (user) {
    userEmail = user.provider === "JWT" ? user.email : user.user.email;
  }


  // Filter the userCodes based on the user's email
  const filteredUserCodes = userCodes.filter(userCode => userCode.useremail === userEmail);

  return (
    <div className={styles.cardsContainer}>
      <div>
        <h1>MY UPLOADS</h1>
      </div>
      <div className={styles.container}>
        {filteredUserCodes.map((userCode) => (
          <Card key={userCode._id} userCode={userCode} />
        ))}
      </div>
    </div>
  );
};

export default UserFilteredPost;
