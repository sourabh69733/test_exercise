import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";

// const routes = [
//   { path: "/", component: HomePage },
//   { path: "/login/google", component: AutheticationGoogle },
//   { path: "/profile" },
// ];
var firebaseConfig = {
  apiKey: "AIzaSyBw5wrnsT0WWtXyjkdBM4beD7VzWTD4ngE",
  authDomain: "authorisation-for-webapp.firebaseapp.com",
  projectId: "authorisation-for-webapp",
  storageBucket: "authorisation-for-webapp.appspot.com",
  messagingSenderId: "100123918393",
  appId: "1:100123918393:web:474d0c975750a3a0fbcde8",
  measurementId: "G-ZJPRNDVYP3",
};

firebase.initializeApp(firebaseConfig);

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children} </authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        return res.user;
      });
  };

  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword()
      .then((res) => {
        setUser(res.user);
        return res.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, signin, signup, signout };
}
