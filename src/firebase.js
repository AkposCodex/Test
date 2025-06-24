// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJcdT4lWNq_zAaJlvsQKrWSZFiqeSbS1I",
    authDomain: "xpenspay.firebaseapp.com",
    projectId: "xpenspay",
    storageBucket: "xpenspay.firebasestorage.app",
    messagingSenderId: "302680894130",
    appId: "1:302680894130:web:82c7cd1e6aaf4979c337ab",
    measurementId: "G-C7L2PNVKH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
    app,
    analytics
    // Export other services here too, e.g.,
    // getFirestore(app),
    // getAuth(app)
};