import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_KEY,
    authDomain: import.meta.env.VITE_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING,
    appId: import.meta.env.VITE_APP_ID
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, )
export default app