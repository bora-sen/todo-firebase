// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCHSSp6ifgXNyILfyhkujgOBJ-ajA4kDCc",

  authDomain: "todo-firebase-62b9a.firebaseapp.com",

  projectId: "todo-firebase-62b9a",

  storageBucket: "todo-firebase-62b9a.appspot.com",

  messagingSenderId: "736378102644",

  appId: "1:736378102644:web:117d7967d988de38f1c221"

};


// Initialize Firebase


export const App = initializeApp(firebaseConfig)
export const Auth = getAuth(App);