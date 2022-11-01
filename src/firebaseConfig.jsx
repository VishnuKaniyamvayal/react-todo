import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA1Jt-2zaQ4sGwf3pMPADhWCFIuucT60W0",
  authDomain: "todo-app-d9778.firebaseapp.com",
  projectId: "todo-app-d9778",
  storageBucket: "todo-app-d9778.appspot.com",
  messagingSenderId: "1070976019933",
  appId: "1:1070976019933:web:9ae954c319872d04e65a34",
  measurementId: "G-4B47G940XE"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
