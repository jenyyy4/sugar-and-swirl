import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "sugar-and-swirl.firebaseapp.com",
    projectId: "sugar-and-swirl",
    storageBucket: "sugar-and-swirl.firebasestorage.app",
    messagingSenderId: "405196884821",
    appId: "1:405196884821:web:5cb365df94d14b50f83ddc",
    measurementId: "G-2KBTS2MTS7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

auth.onAuthStateChanged((user) => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
});

export { auth, provider, signInWithPopup };