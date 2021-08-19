// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAX_SbOPXeE5JRRXLZ8EaufbzymE7qrCZ0",
    authDomain: "messenger-clone-591dc.firebaseapp.com",
    projectId: "messenger-clone-591dc",
    storageBucket: "messenger-clone-591dc.appspot.com",
    messagingSenderId: "51234840784",
    appId: "1:51234840784:web:5f6942000654056452fed5",
    measurementId: "G-GMC8M39FGF"
});

const db = firebaseApp.firestore();

export default db;