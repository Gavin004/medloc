import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBwqP1nxvV9_9cNcaeBQuFZL94XWLPrj0o",
    authDomain: "medipro-337c7.firebaseapp.com",
    projectId: "medipro-337c7",
    storageBucket: "medipro-337c7.appspot.com",
    messagingSenderId: "566094349314",
    appId: "1:566094349314:web:5ab62d1caffb27fd3dd31b",
    measurementId: "G-1MDX0SHPWZ"
   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;