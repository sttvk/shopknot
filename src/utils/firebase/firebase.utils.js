import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuico5vdA6n4pPqHXQx48tnqMSz1nJKew",
  authDomain: "shopknot-db.firebaseapp.com",
  projectId: "shopknot-db",
  storageBucket: "shopknot-db.appspot.com",
  messagingSenderId: "760772328136",
  appId: "1:760772328136:web:f5e9201788e1fb9958c3fd",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (authUser) => {
  const userDocRef = doc(db, "users", authUser.uid);
};
