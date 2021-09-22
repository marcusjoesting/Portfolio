import { initializeApp } from "firebase/app";
import {getFirestore,collection,addDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAj-i4x3MVnATCXfBtIwPmy-eP8QnDr9Sc",
  authDomain: "seanmarcus.firebaseapp.com",
  projectId: "seanmarcus",
  storageBucket: "seanmarcus.appspot.com",
  messagingSenderId: "320614078425",
  appId: "1:320614078425:web:3abdef1de6eed6090febc8"
};


const app = initializeApp(firebaseConfig)

export const firestore = getFirestore(app);
export const messageCollection = collection(firestore, 'messages')
export const uploadMessage = data => {
  return addDoc(messageCollection,data)
}
