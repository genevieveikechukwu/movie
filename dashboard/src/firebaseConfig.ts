import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.KEY,
    authDomain: process.env.DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.MESSAGING,
    appId: process.env.APP_ID
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export default app