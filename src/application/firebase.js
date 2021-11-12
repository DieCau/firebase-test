import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDZ5iZzzZc-vP2sFndbf2h_k9QsJGWJf5w",
  authDomain: "fir-test-87351.firebaseapp.com",
  projectId: "fir-test-87351",
  storageBucket: "fir-test-87351.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(); 
export default app;