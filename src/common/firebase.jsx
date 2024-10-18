import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD0bMKjLLEitQRS1ppLSBtJXz4Zlbd5-bQ",
    authDomain: "blog-website-60b5f.firebaseapp.com",
    projectId: "blog-website-60b5f",
    storageBucket: "blog-website-60b5f.appspot.com",
    messagingSenderId: "483142088987",
    appId: "1:483142088987:web:949a796d4599fd0beefbbe",
    measurementId: "G-MSPJV1RS1V"
};


const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}