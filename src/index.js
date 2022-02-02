import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBm9ZYNuY27Hpi7p3UwF7RpUb_fLFOGAjE",
  authDomain: "sushi-got.firebaseapp.com",
  projectId: "sushi-got",
  storageBucket: "sushi-got.appspot.com",
  messagingSenderId: "943191561817",
  appId: "1:943191561817:web:ac02fca8d6861d16d8c348",
  measurementId: "G-WVSQ8MHNNF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
