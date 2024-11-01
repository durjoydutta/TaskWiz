// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCzOZqGNC2A-9opyZw0zbWsgWoTmHfzEc",
  authDomain: "fir-todo-app-d5dc7.firebaseapp.com",
  databaseURL: "https://fir-todo-app-d5dc7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-todo-app-d5dc7",
  storageBucket: "fir-todo-app-d5dc7.firebasestorage.app",
  messagingSenderId: "1097837348647",
  appId: "1:1097837348647:web:2f87cf40fd117b625c0b02",
  measurementId: "G-D6G44SZ6F1"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);