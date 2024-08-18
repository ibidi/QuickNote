import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

// Firebase yapılandırması
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}

// Firebase'i başlat
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

// Firebase'i Vue bileşenlerine ekleyelim
const app = createApp(App)
app.config.globalProperties.$db = db
app.mount('#app')
