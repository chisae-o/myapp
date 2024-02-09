import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2X2Iycj4OBGO9Hr4DWxeFuWSKxYCrdHw",
  authDomain: "task-management-b9bec.firebaseapp.com",
  projectId: "task-management-b9bec",
  storageBucket: "task-management-b9bec.appspot.com",
  messagingSenderId: "590693433354",
  appId: "1:590693433354:web:72c1ff74dd8f3bbab55ff3",
  measurementId: "G-R8T6Q8NX9B",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
export { app, auth, db };
