import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCYsNwNVgTU01SXegQr1407acGzYl1cJm8",
    authDomain: "lets-share-afcfa.firebaseapp.com",
    projectId: "lets-share-afcfa",
    storageBucket: "lets-share-afcfa.appspot.com",
    messagingSenderId: "527047137406",
    appId: "1:527047137406:web:151c107bd60aaa493f202f",
    measurementId: "G-H987EEP7RE"
  };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();