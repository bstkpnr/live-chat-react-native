import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAiLmZIX1W3nVVYy0XzjQ9fuJdWDdiWLXc",
  authDomain: "fir-chatapp-4d0c1.firebaseapp.com",
  projectId: "fir-chatapp-4d0c1",
  storageBucket: "fir-chatapp-4d0c1.appspot.com",
  messagingSenderId: "162804248622",
  appId: "1:162804248622:web:08ba626501c325d99cefbf",
  measurementId: "G-7FVM4CYJNH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
export{app}
