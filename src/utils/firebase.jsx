// utils/firebase.js (or firebase.jsx)
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi9KV8ED4kUFNcA4AwFbbeyUDy_synJ1o",
  authDomain: "stream-gptgpt-9a3e7.firebaseapp.com",
  projectId: "stream-gptgpt-9a3e7",
  storageBucket: "stream-gptgpt-9a3e7.appspot.com",
  messagingSenderId: "980883161529",
  appId: "1:980883161529:web:2a1bb0398e5175a330f668",
  measurementId: "G-ZKKCYKCD0K",
};

//  Prevents "Firebase App named '[DEFAULT]' already exists" error
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

//  Export Auth to use in Login.jsx
export const auth = getAuth(app);

export default app;
