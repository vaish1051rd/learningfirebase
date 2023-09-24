// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5V_Vzr7RxiCIHgV4uQ-0qpuN-oTi-pE0",
  authDomain: "learningfirebase-e42e7.firebaseapp.com",
  projectId: "learningfirebase-e42e7",
  storageBucket: "learningfirebase-e42e7.appspot.com",
  messagingSenderId: "91720976047",
  appId: "1:91720976047:web:d67e0a1202b0edb949365a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database ={
    users : firestore.collection('users')
}