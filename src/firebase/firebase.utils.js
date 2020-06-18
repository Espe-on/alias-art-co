import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDxRRKB-Vd9nn9ehVwoKcXsXs1qhmQJrAE",
    authDomain: "alias-art-co-db.firebaseapp.com",
    databaseURL: "https://alias-art-co-db.firebaseio.com",
    projectId: "alias-art-co-db",
    storageBucket: "alias-art-co-db.appspot.com",
    messagingSenderId: "138228944882",
    appId: "1:138228944882:web:c6ec24025efe472b1ca56b",
    measurementId: "G-YX5Z4HNDWV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
