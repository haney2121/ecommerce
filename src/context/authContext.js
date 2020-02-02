import React, { createContext, useMemo, useState, useEffect } from 'react';
//firebase
import { auth } from '../firebase/firebase.utils';

export const AuthContext = createContext();

const Auth = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => {
      //closes subscrition
      auth.onAuthStateChanged();
    };
  }, []);

  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default Auth;
