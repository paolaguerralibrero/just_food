import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjZnp5u-vPs_SXrv_aZvICOYMnL5uvrgo",
    authDomain: "just-food-dbe76.firebaseapp.com",
    projectId: "just-food-dbe76",
    storageBucket: "just-food-dbe76.appspot.com",
    messagingSenderId: "432925386243",
    appId: "1:432925386243:web:babb6e4239ed9fa6565036"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signUp = async (name, email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    await updateProfile(user, { displayName: name });
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logOut = () => {
  signOut(auth);
};
export { auth, db, signIn, signUp, logOut };