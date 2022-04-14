// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAgw8gtvUBNjkmX7PuGJxJz2k9Jja3_-c",
  authDomain: "online-shopping-mall-36e9b.firebaseapp.com",
  projectId: "online-shopping-mall-36e9b",
  storageBucket: "online-shopping-mall-36e9b.appspot.com",
  messagingSenderId: "844125252420",
  appId: "1:844125252420:web:e34585c4fa7567f9044511",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
