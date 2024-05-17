import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2X2Iycj4OBGO9Hr4DWxeFuWSKxYCrdHw",
  authDomain: "task-management-b9bec.firebaseapp.com",
  projectId: "task-management-b9bec",
  storageBucket: "task-management-b9bec.appspot.com",
  messagingSenderId: "590693433354",
  appId: "1:590693433354:web:72c1ff74dd8f3bbab55ff3",
  measurementId: "G-R8T6Q8NX9B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
