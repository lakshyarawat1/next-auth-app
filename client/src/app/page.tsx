"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const FirebaseCredentials = {
  apiKey: "AIzaSyC_YKrM6rfGHXEgIA2Dddgl3Rm8eN30xO8",

  authDomain: "auth-app-f8231.firebaseapp.com",

  databaseURL:
    "https://auth-app-f8231-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "auth-app-f8231",

  storageBucket: "auth-app-f8231.appspot.com",

  messagingSenderId: "429519946777",

  appId: "1:429519946777:web:abdd1cbc4a82c19f68d688",

  measurementId: "G-R9P41P22ZW",
};

firebase.initializeApp(FirebaseCredentials);
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

interface pageProps {}

const Page = ({}) => {
  const [user, setUser] = useState<pageProps | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
      console.log(user);
    });
  }, []);
  return (
    <div>
      <Link href="/auth/register">Register</Link>
      {user && <div>Logged in as {user} </div>}
    </div>
  );
};

export default Page;
