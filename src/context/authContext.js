import React, { createContext, useState, useEffect } from 'react';
//firebase
import { auth } from '../firebase/firebase.utils';
import { createUserProfileDocument } from '../firebase/firebase.functions';

export const AuthContext = createContext();

const Auth = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          let userInfo = { ...snapShot.data(), id: snapShot.id };
          setUser(userInfo);
        });
      } else {
        setUser(null);
      }
    });
    return () => {
      //closes subscrition
      auth.onAuthStateChanged();
    };
  }, []);

  const logout = () => {
    auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default Auth;
