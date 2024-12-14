import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "blood-bank-management-72f09.firebaseapp.com",
  projectId: "blood-bank-management-72f09",
  storageBucket: "blood-bank-management-72f09.appspot.com",
  messagingSenderId: "164322866719",
  appId: "1:164322866719:web:a988886972a7a9834c872a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 export const  auth = getAuth();
 export const storage = getStorage(app);