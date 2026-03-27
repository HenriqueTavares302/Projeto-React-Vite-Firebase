import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDFjGlKzLvYICeQuDscElrbQoOPh3DNIg8",
  authDomain: "bdvite-project.firebaseapp.com",
  projectId: "bdvite-project",
  storageBucket: "bdvite-project.firebasestorage.app",
  messagingSenderId: "39518328775",
  appId: "1:39518328775:web:92acef1108916a8ac3ebe2"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }