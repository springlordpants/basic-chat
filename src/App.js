import React from "react"
import "./App.css"

import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

import { useAuthState } from "react-firebase-hooks"
import { useCollectionData } from "react-firebase-hooks/firestore"

firebase.initializeApp({
  apiKey: "AIzaSyBDbB1gum9yNxJABptctZCLitT9AtJqZws",
  authDomain: "basic-chat-8c7c6.firebaseapp.com",
  databaseURL: "https://basic-chat-8c7c6.firebaseio.com",
  projectId: "basic-chat-8c7c6",
  storageBucket: "basic-chat-8c7c6.appspot.com",
  messagingSenderId: "63233104998",
  appId: "1:63233104998:web:c1280568ce6eb7747661a7",
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  )
}

export default App
