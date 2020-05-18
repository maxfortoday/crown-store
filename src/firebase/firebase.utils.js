import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBYD63sVBh1N_RjilEFhGPKkOey2tzU0nw",
  authDomain: "crown-db-431f4.firebaseapp.com",
  databaseURL: "https://crown-db-431f4.firebaseio.com",
  projectId: "crown-db-431f4",
  storageBucket: "crown-db-431f4.appspot.com",
  messagingSenderId: "513324289354",
  appId: "1:513324289354:web:437c3d729e6662db3905b3",
  measurementId: "G-1B7ZETB414"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
      
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;