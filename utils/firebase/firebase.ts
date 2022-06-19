// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxq2H8puGEgYXleOgvbMf1uMLlj0jFgac",
    authDomain: "tanemin-d1552.firebaseapp.com",
    projectId: "tanemin-d1552",
    storageBucket: "tanemin-d1552.appspot.com",
    messagingSenderId: "724909656755",
    appId: "1:724909656755:web:4dfc502dd0f6c9a979bec6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);