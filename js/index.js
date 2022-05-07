
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDxANZUdscFk_KDiIJBXbSDXzS1tVu_vxQ",
authDomain: "crud-7262c.firebaseapp.com",
projectId: "crud-7262c",
storageBucket: "crud-7262c.appspot.com",
messagingSenderId: "799240600664",
appId: "1:799240600664:web:b7ea80121fbe0163559e2d",
measurementId: "G-3PXNZDM6ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

