// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-Lpan2vkrQRv7qecEqHEtXn1QGD61Q1s",
    authDomain: "spotify-a8bc8.firebaseapp.com",
    projectId: "spotify-a8bc8",
    storageBucket: "spotify-a8bc8.appspot.com",
    messagingSenderId: "1045135632802",
    appId: "1:1045135632802:web:793aeb82e45a4d9bd86afb",
    measurementId: "G-8Q3B363TEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);