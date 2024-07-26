import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const config = {
	apiKey: "AIzaSyDbTofY5yTs--OSGBw7pxW1Db6Ra9o0d9U",
    authDomain: "pathbook.firebaseapp.com",
    databaseURL: "https://pathbook.firebaseio.com",
    projectId: "pathbook",
    storageBucket: "pathbook.appspot.com",
    messagingSenderId: "407045997235",
    appId: "1:407045997235:web:b1b13ed7683b0cd0b166c6",
    measurementId: "G-YL4YZRPDC0"
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth;
const firestore = firebase.firestore;
const functions = firebase.functions;
const storage = firebase.storage;

export { auth, firestore, storage, functions };
