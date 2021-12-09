import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBNI0cunMYkQxS_rhHB6Iz6cHbak4q_8vY",
    authDomain: "notepad-8f5c1.firebaseapp.com",
    projectId: "notepad-8f5c1",
    storageBucket: "notepad-8f5c1.appspot.com",
    messagingSenderId: "274526410466",
    appId: "1:274526410466:web:2adfd872f63091809cb0bb"
};
const app = initializeApp(firebaseConfig);

ReactDOM.render(<App app = {app}/>, document.getElementById("root"));
