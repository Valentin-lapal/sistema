import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCuMbhKIVJ5Heew25S8OzhyyWysCuOedZs",
    authDomain: "liverval-react.firebaseapp.com",
    projectId: "liverval-react",
    storageBucket: "liverval-react.firebasestorage.app",
    messagingSenderId: "899806639068",
    appId: "1:899806639068:web:674fd920d9d9911837d519",
    measurementId: "G-NYXBPF974K"
};
  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
