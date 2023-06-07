import { createContext, useEffect } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // user states
  const [user, setUser] = useState(null);

  // login with google

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  // login with github

  const gprovider = new GithubAuthProvider();
  const handleGitHubSignIn = () => {
    return signInWithPopup(auth, gprovider);
  };

  // create user with email password

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email password

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // onAuth

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // sign out

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    handleGoogleSignIn,
    handleGitHubSignIn,
    logOut,
    createUser,
    signIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
