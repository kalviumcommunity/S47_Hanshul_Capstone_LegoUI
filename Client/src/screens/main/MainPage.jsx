import { Link } from "react-router-dom";
import "../Styles/MainPage.css"
import NavBar from "../../components/Compo/NavBar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function MainPage() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:500/api/users/loggedUser', {
  //         withCredentials: true, // Include credentials (cookies)
  //       });
  //       if (response.data.status === 'success') {
  //         setUser(response.data.data);
  //       } else {
  //         setError('Failed to fetch user data');
  //       }
  //     } catch (error) {
  //       setError('Error fetching user data');
  //       console.log(error)
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // if (!user) {
  //   return <p>No user data</p>;
  // }

  return (
    <>
      <NavBar/>
      <Link to="/create">
        <a href="">create post image</a>
      </Link>
      <br />
      <Link to="/display">
      <a href="">display image post</a>
      </Link>
      {/* <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      Add more user details as needed 
    </div>    */}
    </>
  );
}
