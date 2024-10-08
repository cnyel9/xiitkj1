// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB1LIerGt5_hRhWDqoT2K1k4hpxEC2JAbQ",
  authDomain: "xiitkjatu.firebaseapp.com",
  projectId: "xiitkjatu",
  storageBucket: "xiitkjatu.appspot.com",
  messagingSenderId: "735388670330",
  appId: "1:735388670330:web:9e882665dac4987fc61ec3"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();