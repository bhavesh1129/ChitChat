import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1Vu1U2JqSfRGi1fWtLyT7xr4W4CjOWvE",
    authDomain: "chatapp-83e35.firebaseapp.com",
    projectId: "chatapp-83e35",
    storageBucket: "chatapp-83e35.appspot.com",
    messagingSenderId: "13175386879",
    appId: "1:13175386879:web:49c2cd647f5bdd1cc7d2ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()