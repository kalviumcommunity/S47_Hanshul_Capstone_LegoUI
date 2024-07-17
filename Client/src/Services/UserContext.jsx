import React, { createContext, useState, useEffect } from 'react';
import { getJWTUser } from './JWTLoggedUser';
import { getGoogleUser } from './GoogleLoggedUser';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const jwtUserData = await getJWTUser(token);
          setUser(jwtUserData.data);
        } else {
          const googleUserData = await getGoogleUser();
          setUser(googleUserData);
        }
      } catch (error) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
        console.log(user);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
