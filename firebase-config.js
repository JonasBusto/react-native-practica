// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage, ref} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBMtASaYnjzbN2FreNq7yeoF_BnJtEOdeU',
  authDomain: 'react-native-practica-f7193.firebaseapp.com',
  projectId: 'react-native-practica-f7193',
  storageBucket: 'react-native-practica-f7193.appspot.com',
  messagingSenderId: '626978347265',
  appId: '1:626978347265:web:ce157e08b69abda6be6300',
  measurementId: 'G-9GH2CJWYLV',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
