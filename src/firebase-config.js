import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDHG9Ab1gD8Ukn0eOip09MLgk4o_q-BVJE",
    authDomain: "authentication-practice-fb691.firebaseapp.com",
    projectId: "authentication-practice-fb691",
    storageBucket: "authentication-practice-fb691.appspot.com",
    messagingSenderId: "769611198636",
    appId: "1:769611198636:web:5847b5986e4a81d34eef09",
    measurementId: "G-1JK1S163S6"
  };
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);