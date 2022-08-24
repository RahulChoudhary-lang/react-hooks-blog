import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy2LsgKazkunvYxq5T23gj5BOmjokTOd8",
  authDomain: "react-hooks-blog-f5251.firebaseapp.com",
  projectId: "react-hooks-blog-f5251",
  storageBucket: "react-hooks-blog-f5251.appspot.com",
  messagingSenderId: "806767761487",
  appId: "1:806767761487:web:21136291290a576abe723a",
  measurementId: "G-L5LRNP4YF4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = firebase.firestore();
