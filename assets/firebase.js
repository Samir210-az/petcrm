import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get, child, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
export { ref, set, get, child, push, onValue, signInWithPhoneNumber, RecaptchaVerifier };
