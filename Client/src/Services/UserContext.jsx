import React, { createContext, useState, useEffect } from 'react';
import { getJWTUser } from './JWTLoggedUser';
import { getGoogleUser } from './GoogleLoggedUser';
import { getAdminCodes } from '../Services/AdminCodes';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adminCodes, setAdminCodes] = useState([]);

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

  useEffect(() => {
    const fetchAdminCodes = async () => {
      try {
        const codes = await getAdminCodes();
        setAdminCodes(codes);
      } catch (error) {
        console.error('Failed to fetch admin codes:', error);
      }
    };

    fetchAdminCodes();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error, setUser, adminCodes }}>
      {children}
    </UserContext.Provider>
  );
};
