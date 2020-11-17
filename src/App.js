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
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  )
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return <button onClick={signInWithGoogle}>Sign in with Google</button>
}

function SignOut() {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection("messages")
  const query = messagesRef.orderBy("createdAt").limit(25)

  const [messages] = useCollectionData(query, { idField: "id" })

  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <div></div>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid } = props.message
  return <p>{text}</p>
}

export default App
