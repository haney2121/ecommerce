import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDYJHfvJ6cYn5Hq-A0bWppt6OCBX-PORcQ',
  authDomain: 'ecommerce-fc285.firebaseapp.com',
  databaseURL: 'https://ecommerce-fc285.firebaseio.com',
  projectId: 'ecommerce-fc285',
  storageBucket: 'ecommerce-fc285.appspot.com',
  messagingSenderId: '38043982329',
  appId: '1:38043982329:web:20b26d2207389948b68528',
  measurementId: 'G-3HL603S0G8'
};

//creating firebase config and starting
firebase.initializeApp(config);

//creating auth and store
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// pop to select account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

//method to make the pop up happen with the provider above to use the select account
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//exporting to other pieces
export default firebase;
