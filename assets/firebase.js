import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, child, push, onValue, update, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTinMWmDgmpaNu1VcGQCvDC6M7j3IOKWY",
  authDomain: "petcrm-c0cfe.firebaseapp.com",
  databaseURL: "https://petcrm-c0cfe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "petcrm-c0cfe",
  storageBucket: "petcrm-c0cfe.firebasestorage.app",
  messagingSenderId: "602324806769",
  appId: "1:602324806769:web:709443b81a0cadffdabfd0"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { ref, set, get, child, push, onValue, update, remove, signInWithPopup, onAuthStateChanged, signOut };

export const TRIAL_DAYS = 3;
export const MS_PER_DAY = 24 * 60 * 60 * 1000;

// Email-i Realtime Database açarı kimi istifadə edilə bilən formata çevirir
// (RTDB açarlarında . # $ [ ] / simvolları qadağandır)
export function emailToKey(email) {
  return email.toLowerCase().trim().replace(/[.#$\[\]/]/g, '_');
}
