// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk8JDuoUKKb4LY6VUnt0rzLvhRJ-PmWgM",
  authDomain: "uploadfile-2c3cc.firebaseapp.com",
  projectId: "uploadfile-2c3cc",
  storageBucket: "uploadfile-2c3cc.appspot.com",
  messagingSenderId: "434977389255",
  appId: "1:434977389255:web:1d26eda5966ed910295ce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);