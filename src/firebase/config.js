
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDFLcrqTYA8lE0LlcFJVNvEhKr12HwXnsU",
    authDomain: "ecommerce-sneakers-f1c3b.firebaseapp.com",
    projectId: "ecommerce-sneakers-f1c3b",
    storageBucket: "ecommerce-sneakers-f1c3b.appspot.com",
    messagingSenderId: "883373444725",
    appId: "1:883373444725:web:431ef9a4eaa4469d72323c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app