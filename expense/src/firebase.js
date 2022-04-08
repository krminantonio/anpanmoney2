import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN9YI0P56V8QJTnmTe3mM-3jueeT4Oe-k",
  authDomain: "expensetracker-b17d0.firebaseapp.com",
  projectId: "expensetracker-b17d0",
  storageBucket: "expensetracker-b17d0.appspot.com",
  messagingSenderId: "573749113407",
  appId: "1:573749113407:web:39e7c1e48c7eee08953e8a",
  measurementId: "G-FX7MKLX5Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;