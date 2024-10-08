import React from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,collection,getDocs,addDoc
} from 'firebase/firestore'

    const apiKey = `${import.meta.env.VITE_APP_API_KEY}`
    const authDomain = `${import.meta.env.VITE_APP_AUTH_DOMAIN}`
    const projectId = `${import.meta.env.VITE_APP_PROJECT_ID}`
    const storageBucket= `${import.meta.env.VITE_APP_STORAGE_BUCKET}`
    const messagingSenderId= `${import.meta.env.VITE_APP_MESSAGING_SENDER_ID}`
    const appId = `${import.meta.env.VITE_APP_APP_ID}`
    const measurementId = `${import.meta.env.VITE_APP_MEASUREMENT_ID}`
    const firebaseConfig = {
        apiKey:`${apiKey}`,
        authDomain:`${authDomain}`,
        projectId:`${projectId}`,
        storageBucket:`${storageBucket}`,
        messagingSenderId:`${messagingSenderId}`,
        appId:`${appId}`,
        measurementId:`${measurementId}`
      };
      const app = initializeApp(firebaseConfig);
      
      const analytics = getAnalytics(app);
      //init services
      export const db = getFirestore()
 
