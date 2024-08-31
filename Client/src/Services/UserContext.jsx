import React, { createContext, useState, useEffect } from 'react';
import { getJWTUser } from './JWTLoggedUser';
import { getGoogleUser } from './GoogleLoggedUser';
import { getAdminCodes } from '../Services/AdminCodes';
import { getUserCodes } from '../Services/UserCodes';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adminCodes, setAdminCodes] = useState([]);
  const [userCodes, setUserCodes] = useState([]);
  const [AdminEmail, setAdminEmail] = useState('hanshulkumawat22@gmail.com')
  const [Displaybtns, setDisplaybtns] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const jwtUserData = await getJWTUser(token);
          setUser(jwtUserData.data);
          console.log(object)
         } else {
          const googleUserData = await getGoogleUser();
          setUser(googleUserData);
          console.log('Google User Data:', googleUserData);
        }
        
      } catch (error) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
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
  useEffect(() => {
    const fetchUserCodes = async () => {
      try {
        const codes = await getUserCodes();
        setUserCodes(codes);
      } catch (error) {
        console.error('Failed to fetch user codes:', error);
      }
    };

    fetchUserCodes();
  }, []);
  useEffect(()=>{
    const checkuser =  () =>{
      try {
        if(user.email || user.user.email === AdminEmail){
          setDisplaybtns(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    checkuser()
  })

  return (
    <UserContext.Provider value={{ user, loading, error, setUser, adminCodes, userCodes, AdminEmail, Displaybtns, setDisplaybtns }}>
      {children}
    </UserContext.Provider>
  );
};
