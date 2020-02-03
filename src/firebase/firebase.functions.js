import 'firebase/firestore';

import { firestore } from './firebase.utils';

export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) return;

  //does user exist
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionData
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};
