// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID 
  // apiKey: "AIzaSyBlq2Q6Aiu5ZD0fqzGXJt0x7MpU7V5gm90",
  // authDomain: "eventhandlers-29ea1.firebaseapp.com",
  // projectId: "eventhandlers-29ea1",
  // storageBucket: "eventhandlers-29ea1.appspot.com",
  // messagingSenderId: "87563983877",
  // appId: "1:87563983877:web:4bd4ef11a4262dcb68506c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)