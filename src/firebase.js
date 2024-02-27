import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnhy_C8QmddGy0NOSQHE7d3WgPQK9Otds",
  authDomain: "chatappkkk-4dc81.firebaseapp.com",
  projectId: "chatappkkk-4dc81",
  storageBucket: "chatappkkk-4dc81.appspot.com",
  messagingSenderId: "778827104686",
  appId: "1:778827104686:web:ae7f4d299772333d83883f",
  measurementId: "G-90X200QXNF"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
