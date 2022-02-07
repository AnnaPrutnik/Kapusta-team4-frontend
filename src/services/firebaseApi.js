import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCKndUPD0aGZrnQt2PnUbXdDC753mI3tgc",
    authDomain: "auth-1cbc0.firebaseapp.com",
    projectId: "auth-1cbc0",
    storageBucket: "auth-1cbc0.appspot.com",
    messagingSenderId: "542766181354",
    appId: "1:542766181354:web:aee973b1f391d02f492093",
    measurementId: "G-H6TVSTLL2N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };