import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyC3895VXHTWJKRDeppMVTaL9i1Z7Gek9CE",
    authDomain: "graphapp-cc6e9.firebaseapp.com",
    projectId: "graphapp-cc6e9",
    storageBucket: "graphapp-cc6e9.appspot.com",
    messagingSenderId: "616256708402",
    appId: "1:616256708402:web:ed00000da7ce2e3309412b"
};

const app = firebase.initializeApp(firebaseConfig);

export const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
}

export const storage = firebase.storage();