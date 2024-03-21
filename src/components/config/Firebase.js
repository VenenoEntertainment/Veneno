import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAMKW0w5ZKS5eo9_7qY94Rulbn41U2vopM",
    authDomain: "veneno-12aa9.firebaseapp.com",
    projectId: "veneno-12aa9",
    storageBucket: "veneno-12aa9.appspot.com",
    messagingSenderId: "224165868096",
    appId: "1:224165868096:web:ddc63a3dc80617ccbee5a5",
    measurementId: "G-MREDYQ5ZLG"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const googleProvider = new GoogleAuthProvider();
export { auth, db, storage, googleProvider}


