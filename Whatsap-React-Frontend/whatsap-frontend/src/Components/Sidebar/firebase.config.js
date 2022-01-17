// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKaFRMmhdOYBnEKV2D2ZUcNT2uUHfeXus",
    authDomain: "whatsapp-clone-35083.firebaseapp.com",
    projectId: "whatsapp-clone-35083",
    storageBucket: "whatsapp-clone-35083.appspot.com",
    messagingSenderId: "244996306630",
    appId: "1:244996306630:web:ff4d0ea431d1a0800e89c7"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db; 
