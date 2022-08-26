import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAg71pYKbjdXy0RGV1UExCwaai7JmqdRCc",

  authDomain: "acnh-art-gallery.firebaseapp.com",

  projectId: "acnh-art-gallery",

  storageBucket: "acnh-art-gallery.appspot.com",

  messagingSenderId: "42836531973",

  appId: "1:42836531973:web:700e49519ceadad47af56c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
